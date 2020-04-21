FROM node:12

WORKDIR /usr/src/app

RUN npm install -g npm@latest

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5050

CMD ["npm", "run", "start:api:production"]
