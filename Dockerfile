FROM node:23-alpine3.20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY nest* ./
COPY tsconfig*.json ./
COPY src/ ./src/

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
