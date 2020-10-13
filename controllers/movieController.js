const {
    Movie,Actor, sequelize
} = require('../models');

const {Op} = require('sequelize');

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
    async getById(req, res) {
        try {
            const value = await Movie.findByPk(req.params.id, { include:Actor });
            if (!value) {
                return res.status(400).json({
                    message: 'Movie does not exist'
                });
            }
            res.send(value,);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get movie selected'
            });
        }
    },


    async getByTitle(req, res) {
        const title = req.params.title;
        try {
            const value = await Movie.findAll({
                where : { title:{[Op.like]: `%${title}%`}},
                include : Actor,
                attributes: { exclude: ['createdAt', 'updatedAt'] },//EXCLUDE DATESTAMPS
            });
            
            if (!value) {
                return res.status(400).json({
                    message: 'Movie does not exist'
                });
            }
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get the movie by name'
            });
        }
    },

    async create(req, res) {
        try {
            const value = await Movie.create(req.body);
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get Movie selected'
            });
        }
    },
    async delete(req, res) {
        try {
            const value = await Movie.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send({
                message: 'Movie successfully removed'
            })
        

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to delete the Movie'
            });
        }
    },
}

module.exports = MovieController;