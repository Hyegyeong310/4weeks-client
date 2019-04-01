FROM node:8
WORKDIR /partners
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build
EXPOSE 7070

CMD ["npm","run","start"]