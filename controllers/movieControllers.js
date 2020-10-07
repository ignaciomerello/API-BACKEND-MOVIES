const { Movies } = require("../models");

const MovieController = {
    async getAll(req,res){
        try {
            const movies = await Movies.findAll();
            res.send(movies);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get movies'});
        }
    }
}

module.exports = MovieController;