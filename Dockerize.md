<h1>Como dockerizar una App de Angular usando Nginx</h1>
  
· Creamos un Dockerfile
· Creamos un .dockerignore
· Modificamos package.json con la ultima versión 

<h2>Como iniciarlo:</h2>

docker build -t pokeapp-image .

docker run -d -it -p 8080:80/tcp --name pokeapp-prod pokeapp-image

<h2>Como ver la app</h2>

localhost:8080
