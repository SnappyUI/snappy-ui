FROM node:23-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_PRIVATE_STANDALONE=TRUE

RUN apk update
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm

FROM base AS builder
WORKDIR /app

RUN pnpm install --global turbo
COPY . .
RUN turbo prune --scope=snappyui --docker

FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
RUN pnpm turbo build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/snappyui/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/snappyui/.next/static ./apps/snappyui/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/snappyui/public ./apps/snappyui/public

EXPOSE 3000

CMD ["node", "apps/snappyui/server.js"]
