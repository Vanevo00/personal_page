FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 5050

CMD ["npm", "run", "start:api"]
