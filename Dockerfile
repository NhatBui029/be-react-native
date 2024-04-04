FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx prisma migrate dev --name init

EXPOSE 3000

CMD [ "npm", "start" ]