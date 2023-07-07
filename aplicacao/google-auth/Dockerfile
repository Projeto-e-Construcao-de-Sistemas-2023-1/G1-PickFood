FROM node:18.16

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

EXPOSE 8080

CMD npm start