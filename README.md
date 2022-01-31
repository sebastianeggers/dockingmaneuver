# dockingmaneuver

## Prerequisities

- Install node-js, including npm.
- Install docker.

## Lesson 1 - Containerize a React Application

First, we want to make sure that you can run the frontend-app manually, without a container.

- Go to folder `lessons/lesson-1/task`
- Run `npm ci`
- Run `npm start`

Your browser should now open the url http://localhost:3000/ automatically. If it does not, open it manually.

You should now see the create-react-app default page: A bright blue atom, slowly spinning around itself over a dark background.

If it worked as expected, stop the server using `ctrl+c`.

### Task 1

**Objective:** When you have finished, you should be able to build and run the application using the following commands:
```
docker build -t dockingmaneuver-lesson-1 -f .docker/frontend/Dockerfile .
docker run -p 3000:3000 dockingmaneuver-lesson-1 npm start
```
To achieve this, you will need to edit the file `.docker/frontend/Dockerfile`.

Your task is to find out what to put in this file.

Tips:
- You are going to need the following Dockerfile commands: WORKDIR, COPY/ADD, RUN, CMD. Find out what they do.
- Find out what is the difference between COPY and ADD ([[1]](https://nickjanetakis.com/blog/docker-tip-2-the-difference-between-copy-and-add-in-a-dockerile), [[2]](https://stackoverflow.com/questions/24958140/what-is-the-difference-between-the-copy-and-add-commands-in-a-dockerfile?rq=1)), and between RUN and CMD ([[1]](https://nickjanetakis.com/blog/docker-tip-7-the-difference-between-run-and-cmd)).
- Find out how to build efficient Dockefiles for nodejs applications ([[1]](https://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/))

### Task 2

Using docker to run your application is nice, but handling the containers manually gets tedious when your software consists of more containers.

A good solution to handle multiple related containers for local development is `docker-compose`.

**Objective:**
- When you run `docker-compose up` you are able to open the app on http://localhost:3000/
- When you edit the content of the file `frontend/src/App.tsx` the changes are hot-realoaded in the browser.

To achieve this, you will need to edit the file `docker-compose.yml`.

Tips:
- Read the [Overview of Docker Compose](https://docs.docker.com/compose/)
- `volumes` is useful to enable hot-realoading.