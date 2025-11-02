# =========================
# Stage 1: Build
# =========================
FROM node:20 AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build project
RUN npm run build


# =========================
# Stage 2: Run (Production)
# =========================
FROM node:20-alpine AS production

WORKDIR /app

# Copy only what's needed for runtime
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

EXPOSE 3000
CMD ["node", "dist/main.js"]


# =========================
# Stage 3: Development (Optional)
# =========================
# To use this stage for development:
# docker build --target development -t myapp-dev .
# docker run -p 3000:3000 myapp-dev
FROM node:20 AS development

WORKDIR /app

# Copy everything for live reload
COPY package*.json ./
RUN npm install

COPY . .

# Enable hot reload (assuming you use something like `npm run start:dev`)
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
