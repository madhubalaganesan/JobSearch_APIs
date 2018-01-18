FROM node:boron

WORKDIR /JobSearch

COPY package.json /JobSearch

COPY package-lock.json /JobSearch

RUN npm install

COPY . /JobSearch

EXPOSE 3000

CMD ["node", "server.js"]
