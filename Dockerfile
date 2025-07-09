# 🚀 SAINTSAL™ Production Build - Azure Optimized
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install deps first (layer caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps --production=false

# Copy rest of app
COPY . .

# Build the app
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Expose port & run
EXPOSE 3000
CMD ["npm", "start"]
