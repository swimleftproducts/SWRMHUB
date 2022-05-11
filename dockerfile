FROM node:alpine

WORKDIR /App

COPY package.json package.json
COPY package-lock.json package-lock.json 

RUN npm install

COPY client/build client/build 

COPY . .

CMD ["node", "index.js"]