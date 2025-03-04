# Use an official Node.js image as the base image
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Upgrade npm to a compatible version
RUN npm install -g npm@7


RUN npm cache clean --force

# Install dependencies
RUN npm install

# Update the browserslist database to avoid warnings during build
RUN npx browserslist@latest --update-db

RUN npm update
RUN npm audit fix --force

ENV NODE_OPTIONS=--max_old_space_size=4096

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application
RUN npm run build



# Build step 2(Deploying build on NGINX)
FROM nginx:1.17

# Update package lists and install necessary packages
RUN apt-get update -y && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

# Clean up default Nginx HTML content
RUN rm -rf /usr/share/nginx/html/*

# Copy configuration and built files from the builder stage
COPY --from=builder /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
