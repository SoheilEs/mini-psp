# =========================
# Stage 3: Development
# =========================
FROM node:20 AS development

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose port for NestJS
EXPOSE 3000

# Run in watch mode for hot reload
CMD ["npm", "run", "start:dev"]

