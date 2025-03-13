# Base image nhẹ
FROM node:21-slim AS base
WORKDIR /app

# Cài đặt dependencies chỉ một lần
FROM base AS deps
RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*
COPY package*.json yarn*.lock ./

RUN yarn install --frozen-lockfile --production

# Build Next.js
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Image production - tối ưu kích thước
FROM base AS production
WORKDIR /app

# Chỉ copy file cần thiết
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules

# Dọn dẹp cache không cần thiết
RUN rm -rf /usr/local/share/.cache /tmp/*

# Mở cổng chạy app
EXPOSE 3000
ENV PORT=3000

# Chạy Next.js
CMD ["node", "server.js"]
