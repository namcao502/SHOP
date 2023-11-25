FROM node:18.12.0 as build
WORKDIR /shop
COPY . .
RUN npm install --force
RUN npm run build
CMD ["npm", "start"]