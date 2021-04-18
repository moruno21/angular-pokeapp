# Pokeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build (Angular local host)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build (Dockerized)

Run `docker build -t pokeapp-image .` to generate our container's image.

Run `docker run -d -it -p 8080:80/tcp --name pokeapp-prod pokeapp-image` to create our container.

In case it shows an error for already having a container (running or not) using this image, Run:
  `docker rm 'container-hash` and replace container hash with the appropriate one. 

Browse localhost:8080

## Deploy it in kubernetes (using minikube)

Run `minikube start` to initialize it.

Run `minikube dashboard` to browse minikube's web dashboard.

Run `kubectl create -f pokemanifest.yaml` to initialize the deployment and the load balance service.

Browse it!

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page
