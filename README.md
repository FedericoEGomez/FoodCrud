# FoodCrud
Esto es un repo de ejemplo de un crud para los chicos de Numen.
En este repositorio tendremos ejemplos del uso de middlewares, CRUD, rutas versionadas, un swagger ( para fecilitar el testeo de la API ).

intalacion: 
    npm i

levantar servidor: 
    npm run dev - iniciar con nodemon
    npm run start - iniciar con node

folders:
......src
.........|__
.........controllers
.            |__apiController.js
.            |__indexController.js
.........db
.            |__db.js
.........middleware
.            |__validarID.js
.........models
.            |__foods.js
.........routers
.            |__api.js
.            |__index.js
.........utils
.            |__specification.yaml
.            |__swagger.js
.....app.js
.....package.json
.....server.js
    