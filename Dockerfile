FROM node:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --quiet --no-optional --no-fund --loglevel=error
COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000