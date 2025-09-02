FROM node:18-alpine

RUN apk update

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


EXPOSE 2446

CMD ["npm", "run", "start"]
