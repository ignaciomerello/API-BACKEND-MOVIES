const {
    Movies
} = require("../models");
// const { delete } = require("../routes/userRoutes");

const MovieController = {
    async getAll(req, res) {
        try {
            const values = await Movies.findAll();
            res.send(values);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get movies'
            });
        }
    },
    async getById(req, res) {
        try {
            const value = await Movies.findByPk(req.params.id);
            if (!value) {
                return res.status(400).json({
                    message: 'Movie does not exist'
                });
            }
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get movie selected'
            });
        }
    },
    async create(req, res) {
        try {
            const value = await Movies.create(req.body);
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to get order selected'
            });
        }
    },
    async delete(req, res) {
        try {
            const value = await Movies.destroy({
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