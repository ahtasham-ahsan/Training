# Use a base image with Node.js
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 5050

# Run the app
CMD ["node", "server.js"]  # Change this if your entry file is different
