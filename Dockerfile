# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]