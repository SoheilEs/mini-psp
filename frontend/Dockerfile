# Stage: Development
FROM node:20-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite dev server
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "start"]
