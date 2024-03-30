FROM node:18 AS builder

WORKDIR /build

COPY nx.json package-lock.json package.json tsconfig.base.json ./
COPY apps apps/
COPY libs libs/

RUN npm install --ignore-scripts

ARG node_env=production
ENV NODE_ENV ${node_env}

RUN npm run build-version

RUN npm run build web-app


FROM nginx:alpine AS runtime

RUN addgroup -S nonroot \
  && adduser -S nonroot -G nonroot

WORKDIR /dist
COPY --from=builder /build/dist/apps/web-app /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

USER nonroot

ARG port=80
ENV PORT ${port}
EXPOSE ${port}
