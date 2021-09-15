FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/

RUN npm install
RUN npm install --save nodemon typescript ts-node ts-node-dev
RUN npm install --save-dev tsc-watch

# Bundle app source
COPY . /app/

EXPOSE 4000 4000