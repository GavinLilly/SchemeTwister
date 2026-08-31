FROM ghcr.io/pnpm/pnpm:11 AS base

RUN pnpm runtime set node 22 -g

FROM base AS builder

ARG node_env=production
ENV NODE_ENV=${node_env}

WORKDIR /build

COPY pnpm-lock.yaml ./

RUN pnpm fetch

COPY nx.json pnpm-workspace.yaml package.json tsconfig.base.json ./
COPY apps apps/
COPY libs libs/

RUN pnpm run build


FROM nginx:alpine AS runtime

ARG port=80
ENV PORT=${port}

RUN addgroup -S nonroot \
  && adduser -S nonroot -G nonroot

WORKDIR /dist
COPY --from=builder /build/dist/apps/web-app /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

USER nonroot

EXPOSE ${port}
