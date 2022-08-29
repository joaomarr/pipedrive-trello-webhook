FROM node:16

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

EXPOSE 8000

COPY . .

CMD ["npm", "run", "dev:server"]
