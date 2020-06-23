#Dockerfile for Node Express Backend API

FROM node:12

# ARG NODE_ENV = developement

#Create App Directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#Exports
EXPOSE 5000

CMD ["npm","start"]

