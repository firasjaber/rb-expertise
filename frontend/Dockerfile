FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# setup and install packages
COPY package*.json /app
COPY yarn.lock /app

# install packages inside docker container
RUN npm install

# copy everything to /app
COPY . /app