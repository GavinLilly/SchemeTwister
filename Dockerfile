FROM node:current as builder

WORKDIR /build

COPY package.json ./
COPY package-lock.json ./

COPY libtwister ./libtwister
COPY web-app ./web-app

RUN npm ci

RUN npm run build -w web-app

FROM nginx:alpine

WORKDIR /dist

COPY --from=builder /build/web-app/dist/schemetwister /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

ARG port=80
ENV PORT ${port}
EXPOSE ${port}
