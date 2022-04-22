# syntax=docker/dockerfile:1

FROM node:18
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .
RUN npm run swagger-autogen

EXPOSE 3000
CMD [ "node", "server.js" ]