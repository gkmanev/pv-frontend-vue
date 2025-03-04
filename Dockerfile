# Use the official Node.js image
FROM node:16 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Delete node_modules and package-lock.json to avoid issues with corrupted packages
RUN rm -rf node_modules package-lock.json

# Install dependencies
RUN npm install --no-cache

# Continue with the rest of the Dockerfile
RUN npm uninstall @babel/polyfill
RUN npm install @vue/cli-plugin-babel@latest @vue/cli-service@latest sass@latest sass-loader@latest vue-template-compiler@latest
RUN rm -rf node_modules
RUN npm install

COPY . .

# Build the Vue.js application
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
