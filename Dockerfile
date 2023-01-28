FROM node:16 as builder

WORKDIR /build

COPY nx.json package-lock.json package.json tsconfig.base.json ./
COPY src src/
COPY home home/
COPY libtwister libtwister/
COPY randomize randomize/

RUN npm install

ARG node_env=production
ENV NODE_ENV ${node_env}

RUN npm run build

FROM nginx:alpine

WORKDIR /dist

COPY --from=builder /build/dist/schemetwister /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

ARG port=80
ENV PORT ${port}
EXPOSE ${port}
