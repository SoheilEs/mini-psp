# =========================
# Stage 1: Development
# =========================
FROM node:20-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run the app in development mode (hot reload)
CMD ["npm", "run", "dev"]


# =========================
# Stage 2: Build
# =========================
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# =========================
# Stage 3: Production
# =========================
FROM nginx:alpine AS production

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
