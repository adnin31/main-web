# Step 1: Use the official Node.js image
FROM node:16-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Step 4: Copy the rest of your app's source code
COPY . ./

# Step 5: Build the React app for production
RUN npm run build

# Step 6: Use a lightweight web server to serve the React app (nginx)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 7: Expose port 80 to allow traffic to reach the container
EXPOSE 80

# Step 8: Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
