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

### Task 1.1

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

### Task 1.2

Using docker to run your application is nice, but handling the containers manually gets tedious when your software consists of more containers.

A good solution to handle multiple related containers for local development is `docker-compose`.

**Objective:**
- When you run `docker-compose up` you are able to open the app on http://localhost:3000/
- When you edit the content of the file `frontend/src/App.tsx` the changes are hot-realoaded in the browser.

To achieve this, you will need to edit the file `docker-compose.yml`.

Tips:
- Read the [Overview of Docker Compose](https://docs.docker.com/compose/)
- `volumes` is useful to enable hot-realoading.

## Lesson 2 - Communication between frontend and backend in Docker

For this lesson, you are provided with two changes:

First, in addition to the frontend there is now also a directory for backend, containing a minimal backend implemented in GoLang.

Second, the frontend app now contains a button that will try to fetch and display a random color from the backend.

### Task 2.1

**Objective:** Adjust the `docker-compose.yml` file so that the backend is available on port 8080. 

You will not need to provide a command this time, it is already provided in the Dockerfile.

The Dockerfile is already provided for you this time.

After you are finished, run `docker compose up` and navigate to http://localhost:8080/colour in your browser. If all went well, you should see the name of a random colour.

### Task 2.2

**Objective:** If you open the frontend and click the button, you will not yet be able to load the colour from the backend. Your task is to make the backend available in the frontend.

To achieve this, add a `proxy` entry to the `package.json` file in the frontend directory.

It is your task to find out what to put there. If you are unsure, make yourself clear that the name that is given to containers in the docker-compose.yml file are used as names for the containers.
