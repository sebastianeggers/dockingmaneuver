FROM node:17.2.0-alpine3.13
WORKDIR /var/app

# install dependencies
COPY frontend/package.json .
COPY frontend/package-lock.json .
RUN npm ci

# copy app
COPY frontend .

# build app
CMD ["npm", "run", "build"]
