FROM node:8
WORKDIR /admin
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build
EXPOSE 9090

CMD ["npm","run","start"]