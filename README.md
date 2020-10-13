# API-BACKEND-MOVIES

GeeksHubs Academy BackEnd Movies Project

This project is a BackEnd of movies from wich a user can Signup and Login in order to access to the movies previously lodged or seeded.


## Built With 🛠️

* Javascript
* Node
* Express
* SQL
* Sequelite
* GIT

Otros
* Postman
* XAMPP
* Trello


## Knowledge 🧠 

* Llamadas SQL
* Estructura Express


## Getting Started 🚀 

### Clonando repositorio

```js
git clone https://github.com/FerrowRafael/GeeksHubs_P4_-_MovieBackEnd.git
```


### Dependencies installed:

- Express
- Sequelize
- mysql2
- Nodemon
- Bcryptjs
- Jsonwebtoken
- Nodemailer


### Comenzando proyecto Express

Utilizamos express-generator para que nos genere una estructura de proyecto a partir de la cual trabajar.

```js
npm install express-generator -g

express --view=pug myapp

cd myapp

npm install

DEBUG=myapp:* npm start
```


### Configuración Sequelize-CLI

Instalación de dependencia
```js
$ npm install --save-dev sequelize-cli
```

Creando modelo 
```js
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

Migrando modelos a DB
```js
npx sequelize-cli db:migrate
```

Creando semilla
```js
npx sequelize-cli seed:generate --name demo-user
```

Migrando semilla a DB
```js
npx sequelize-cli db:seed:all
```


### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```js
npm start
```

## Partes API 🗄 #Partes-API

- Configuration file
- Controllers
- Middleware
- Migrations
- Models
- Routes
- Seeders
  
### Configuration file

Este es el archivo de configuración de nuestra API

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "OldNetflix",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 1
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

### Controllers

The Logic Controllers used to extract the stored data i've used are:

#### Movie
#### Order
#### User

Example: controllers/MovieController.js 
```js

const MovieController = {
    async getAll(req, res) {
        try {
            const value = await Movie.findAll({ include:Actor });
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get movies'
            });
        }
    },
}
module.exports = MovieController;
```


### Middleware

- Auth


### Migrations

The migrations deployed to design the stucture of each table in the DB
has this nomenclature

Example: migrations/XXX-create-actor-movie.js


### Models

The models from wich the table values has taken the attributtes and it's particular association within other tables has been:

- Actor
- ActorMovie 
- Index
- Movie
- Order
- User

Example: models/movie.js

```js
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    static associate(models) {
      this.belongsToMany(models.Actor, {through:'ActorMovie'});
      this.belongsToMany(models.Order, { through: 'OrderMovie' });

    }
  };
  Movie.init({
    title: DataTypes.STRING,
    img_path: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
```

### Routes

The Routes are based in LocalHost at Port 3000 

#### User example

GET <a href="http://localhost:3000/users">http://localhost:3000/users<a>
GET <a href="http://localhost:3000/user/id=:id">http://localhost:3000/users/id=:id<a>
  

### Seeders

- Actors
- Movie

Ej. seeders/Movie.js
```js
for (let page = 1; page < 21; page++) {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de&language=es-ES&page=${page}`)
        .then(res => {
            const peliculas = res.data.results;
            for (const pelicula of peliculas) {
                Movie.create(pelicula)
                .then(movie=>{
                    movie.addGenre(pelicula.genre_ids)
                })
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
}
```

### Seeders

- Authorization
- Signature
- Validations


## Practical example:

In order to acces a movie the user would have to accessing by the following route:

``` js
http://localhost:3000/movies/Mario Bros
```

The user would access to the following JSON request:
```json
[
    {
        "id": 1,
        "title": "Mario Bros",
        "img_path": "cartel",
        "description": "Two Brooklyn plumbers, Mario and Luigi, must travel
        to another dimension to rescue a princess from the evil dictator King
        Koopa and stop him from taking over the world.",
        "genre": "Action",
        "Actors": [
            {
                "id": 1,
                "name": "Bob Hoskins",
                "gender": "Male",
                "profile_path": "[Imdb](https://www.imdb.com/name/nm0001364/?ref_=tt_cl_t1)",
                "popularity": 7.5,
                "createdAt": "2020-10-10T00:52:52.000Z",
                "updatedAt": "2020-10-10T00:52:52.000Z",
                "ActorMovie": {
                    "actorId": 1,
                    "movieId": 1,
                    "createdAt": "2020-10-10T00:52:52.000Z",
                    "updatedAt": "2020-10-10T00:52:52.000Z",
                }
            }
        ]
    }
]
```

## Documentation

- [Express](https://expressjs.com/)
- [Seguelize](https://sequelize.org/master/manual/migrations.html)


## Author 

* **Ignacio Merello lloret** - [ignaciomerello](https://github.com/ignaciomerello)

