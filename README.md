# API-BACKEND-MOVIES

GeeksHubs Academy BackEnd Movies Project

This project is a BackEnd of movies from wich a user can Signup and Login in order to access to the movies previously lodged or seeded.


## Languages and technologies used in the project:

* Javascript
* Node
* Express
* SQL
* GIT

DB Accessibility application programs involved:
* Postman
* WorkBench


### Dependencies installed:

- Express
- Sequelize (ORM)
- mysql2
- Nodemon
- Bcryptjs
- Jsonwebtoken
- Nodemailer

  
### Configuration file "config.json"

This is the file that contains the configuration of the API

```json
{
  "development": {
    "username": "root",
    "password": "19Mysql67!",
    "database": "db_movies",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable":"CLEARDB_DATABASE_URL"
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

