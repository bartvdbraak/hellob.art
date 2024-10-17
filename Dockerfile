FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

RUN mkdir /app
COPY pnpm-lock.yaml /app
WORKDIR /app
RUN pnpm fetch --prod

COPY . /app
RUN pnpm install vite && pnpm run build

FROM base
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=prod /app/build /app/build
EXPOSE 8000
CMD [ "node", "/app/build/index.js" ]