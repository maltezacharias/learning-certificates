# Certificates for university students during COVID distance learning

## Purpose

Automatically generate certificates to document students' learning progress from Moodle courses. 

## Technical documentation

### Run server using docker for development

Install Docker and Docker Compose, clone this repo and then use the following commands to build and run an image:

Build and run a container using `docker-compose up --builld`, this will build a docker image, create a container, 
expose it on Port 8000 on localhost and mount the local directory into the docker container, so that code 
changes made here will immediately reflect in the webpage.

To run encore in dev mode and automatically compile Javascript on Changes execute 
`docker-compose exec learning-certificates yarn encore dev --watch` in 
another shell while the container is running.

Run `docker-compose -f docker-compose.yml up --build` if you don't want the local directory mounted inside the container.
It will then build an image with a current snapshot of the code.

### Setup

Prerequisites:

* Git
* [Composer](https://getcomposer.org/doc/00-intro.md) 
* [Symfony](https://symfony.com/download)
* NodeJS and yarn (`npm install -g yarn`)


```
git clone https://github.com/maltezacharias/learning-certificates.git
cd /path/to/learning-certificates
composer install
yarn install
yarn encore dev
symfony server:start
```



### Production

tbd. 
