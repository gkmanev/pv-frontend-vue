# Use the official Node.js image
FROM node:16 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Install the dependencies
COPY package*.json ./

RUN npm install --no-cache

# Remove @babel/polyfill to avoid conflicts (if it's in the dependencies)
RUN npm uninstall @babel/polyfill

# Update dependencies (this step is optional, if you'd like to always install the latest)
RUN npm install @vue/cli-plugin-babel@latest @vue/cli-service@latest sass@latest sass-loader@latest vue-template-compiler@latest

# Remove node_modules and reinstall (this ensures clean dependencies)
RUN rm -rf node_modules
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vue.js application (this step should work with minification disabled)
RUN npm run build

# Final production image (optional based on your setup)
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
