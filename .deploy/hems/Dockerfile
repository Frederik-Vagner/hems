###### Build container hems START

# Lightweight environment with node pre-installed
FROM node:lts-alpine3.14 AS builder

# Directory to work in the container
WORKDIR /app

# Copy package.json to the root of the WORKDIR
COPY package.json ./

COPY . .

# Install python because Mac M1 seems to be missing it
RUN apk --no-cache add --virtual .builds-deps build-base python3
# Run npm install inside container
RUN npm install --legacy-peer-deps --only=prod
RUN npm install typescript

# Execute this command in the docker container
RUN npm run build:hems

###### Build container END

###### runtime environment START

# Lightweight environment with node nginx-installed
FROM nginx:alpine

# Directory to work in the container
WORKDIR /app

# Copy nginx config to nginx container
COPY .deploy/hems/nginx.conf /etc/nginx/nginx.conf
# Copy build files to nginx container
COPY --from=builder /app/dist/apps/hems /usr/share/nginx/html

# https://pumpingco.de/blog/environment-variables-angular-docker/
# When the container starts, replace the env.js with values from environment variables via package.json scripts

# Execute nginx on container to launch application after setting angular ENVs
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
