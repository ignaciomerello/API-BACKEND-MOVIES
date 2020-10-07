const { Movies } = require("../models");

const MovieController = {
    async getAll(req,res){
        try {
            const values = await Movies.findAll();
            res.send(values);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get movies'});
        }
    },
    async getById(req,res){
        try {
            const value = await Movies.findByPk(req.params.id);
            res.send({value});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get movie selected'});
        }
    },
}

module.exports = MovieController;