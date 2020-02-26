login
# docker login

remove a image
# docker image rm

list all docker images
# docker image ls

build docker image
# docker build -t client:dev .

run a docker image
# docker run -d --name client -p 4200:4200 client:dev

remove a docker image force fully
# docker rm -f client

list all containers
# docker container ls -a

server
# docker build -t server:dev .
# docker run -d --name server -p 3000:3000 server:dev
# docker stop server

rebuild images with local change
# docker-compose build

run containers
# docker-compose up