# -------- Stage 1: Building the React app --------
FROM node:18-slim AS builder
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build
RUN npm prune --production
# -------- Stage 2: Creating production image --------
FROM gcr.io/distroless/nodejs18-debian11
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.mjs ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
USER 1001
EXPOSE 3000
CMD ["server.mjs"]
