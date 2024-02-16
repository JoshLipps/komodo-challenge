FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN ["npm", "i"]

COPY src ./src
COPY tsconfig.json .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
