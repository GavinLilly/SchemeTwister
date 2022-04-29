FROM node:lts as builder

WORKDIR /build

COPY angular.json decorate-angular-cli.js nx.json package-lock.json package.json tsconfig.base.json ./
COPY apps apps/
COPY libs libs/

RUN npm install

ARG node_env=production
ENV NODE_ENV ${node_env}

RUN npm run build-version

RUN npm run build web-app

FROM nginx:alpine

WORKDIR /dist

COPY --from=builder /build/dist/apps/web-app /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

ARG port=80
ENV PORT ${port}
EXPOSE ${port}
