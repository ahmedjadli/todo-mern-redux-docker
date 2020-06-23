#Production Build

#Stage 1: Build react client
FROM node:12 as client

WORKDIR /usr/src/app/client

COPY client/package*.json ./

RUN npm install

COPY client/ ./

RUN ls

RUN npm run build

#Stage 2 : Build Server

FROM node:12

WORKDIR /usr/src/app
COPY --from=client /usr/src/app/client/build ./client/build/
RUN ls

WORKDIR /usr/src/app/
COPY server/package*.json ./
RUN npm ci
COPY server/ ./

ENV PORT 8080

EXPOSE 8080

CMD ["npm","start"]



