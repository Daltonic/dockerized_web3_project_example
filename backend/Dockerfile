FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 9000

VOLUME [ "./node_modules" ]

CMD ["yarn", "start"]