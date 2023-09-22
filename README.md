# PreEntrega 1 Galeano Pablo
## Comisión: 47295

### Alumno: Pablo Galeano

### Profesor: Gonzalo Fernández

### Tutor: Martín Castagno

##

* Se debe realizar las siguientes instalaciones en caso de no disponer de las mismas en el equipo

#### Nodemon
```
npm install -g nodemon
```
### Express & HandlebarsJs
```
npm install express express-handlebars
```
### Socket io
```
npm install socket.io
```
### Multer
```
npm install multer

```
### Mongoose
npm install mongoose

##
* Para correr  la aplicación en modo desarrollador se debe escribir en la terminal:
```
npm run dev 
```
* Para correr  la aplicación en modo produccion se debe escribir en la terminal:
```
npm start
```

se abrirá el puerto 8080, con lo cual se puede interactuar con la app a traves de los siguientes endpoints:


[http://localhost:8080/api/products/](http://localhost:8080/api/products/)

[http://localhost:8080/api/carts/](http://localhost:8080/api/carts/)

[http://localhost:8080](http://localhost:8080) -> handlebars

[http://localhost:8080/realtimeproducts/](http://localhost:8080/realtimeproducts)  -> con websockets

[http://localhost:8080/chat/](http://localhost:8080/chat)

Tener en cuenta que para probar con el formulario en realtimeproducts se deben llenar todos los campos

Los puts,update y delete tambien se pueden hacer con ThunderClient. Los POST no debido a que no deja enviar files desde el modo form-encoded, por lo tanto, multer no recibe la imagen y nos arroja error.