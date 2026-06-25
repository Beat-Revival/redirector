FROM node:24-slim

WORKDIR /app

COPY . .

RUN npm ci

CMD [ "node", "index.js" ]
