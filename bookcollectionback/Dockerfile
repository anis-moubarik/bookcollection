FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM build as run

COPY . .

EXPOSE 3000

CMD ["node", "bin/www"]