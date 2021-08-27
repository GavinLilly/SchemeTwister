FROM node:lts as builder

WORKDIR /build

COPY package.json ./
RUN npm install

COPY . .

ARG node_env=production
ENV NODE_ENV ${node_env}

RUN npx genversion --source root-package.json --es6 --semi src/app/ui-footer/version.ts

RUN npm run build

FROM nginx:alpine

WORKDIR /dist

COPY --from=builder /build/dist/apps/web-app /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

ARG port=80
ENV PORT ${port}
EXPOSE ${port}
