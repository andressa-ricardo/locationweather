FROM node:22.11.0
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000