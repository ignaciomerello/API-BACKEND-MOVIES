const { User } = require("../models");

const UserController = {
    async getAll(req,res){
        try {
            const user = await User.findAll();
            res.send(user);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get user'});
        }
    }
}

module.exports = UserController;