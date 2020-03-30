FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5051

CMD ["npm", "run", "start"]
