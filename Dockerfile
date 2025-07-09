# 🚀 SAINTSAL™ Production Build (Non-Alpine)
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install deps first (layer caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy rest of app
COPY . .

# Build the app
RUN npm run build

# Expose port & run
EXPOSE 3000
CMD ["npm", "start"]

