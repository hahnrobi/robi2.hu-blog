FROM node:16-alpine
WORKDIR /usr/src/robi2blog
COPY ./src ./src/
COPY ./test ./test/
COPY .eslintrc.js .eslintrc.js
COPY nest-cli.json nest-cli.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY ./package.json ./
COPY ./package-lock.json ./
EXPOSE 3000
RUN npm install -production
RUN npm run build
CMD [ "node", "./dist/main.js" ]