FROM node:slim

WORKDIR /the-joy-box

COPY . /the-joy-box

# Install dependencies
RUN npm ci

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
ENTRYPOINT ["npx"]
CMD ["next", "start", "-p", "3000", "-H", "0.0.0.0"]