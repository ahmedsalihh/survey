FROM node:alpine AS build-env

ADD . /app
WORKDIR /app

RUN apk update
RUN npm install

RUN npm run build

FROM node:alpine

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

WORKDIR /app

COPY --from=build-env /app/dist /app/dist

EXPOSE 80

ENTRYPOINT [ "npx" ]
CMD ["serve", "-s", "dist/", "-l", "80"]