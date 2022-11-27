FROM node:19-alpine as builder
WORKDIR /app/builder
COPY . .
# Install python because Mac M1 seems to be missing it
RUN apk --no-cache add --virtual .builds-deps build-base python3
RUN npm i --production
RUN npm i --save-dev @nrwl/nx-cloud

RUN npx nx build api --skip-nx-cache

FROM node:lts-alpine3.10 as runner

WORKDIR /app
COPY --from=builder /app/builder ./

CMD ["node", "./dist/apps/api/main.js"]