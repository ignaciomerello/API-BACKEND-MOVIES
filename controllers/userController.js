const { User } = require("../models");

const UserController = {
    async getAll(req,res){
        try {
            const value = await User.findAll();
            res.send(value);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get user'});
        }
    },
    async getById(req,res){
        try {
            const value = await User.findByPk(req.params.id);
            if(!value){
                return res.status(400).json({message:'User does not exist'}); 
            }
            res.send(value);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'User not found'});
        }
    },
    
}

module.exports = UserController;