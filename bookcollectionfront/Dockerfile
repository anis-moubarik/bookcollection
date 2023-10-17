FROM node:18

WORKDIR /usr/src/app

RUN yarn global add @angular/cli

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4200

CMD ["yarn", "start", "--host", "0.0.0.0"]
