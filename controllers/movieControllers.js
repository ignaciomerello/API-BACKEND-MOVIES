const { Movie } = require("../models");

const MovieController = {
    async getAllMovies(req,res){
        try {
            const movies = await Movie.getAll();
            res.send(movies);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get movies'});
        }
    }
}

module.exports = MovieController;