# Dockerfile for SaintSal™ UI Pure Build

FROM node:18-alpine

WORKDIR /app

# Install only dependencies first for Docker caching boost
COPY package*.json ./
RUN npm install

# Now copy the rest of the files
COPY . .

# Build the production app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]

