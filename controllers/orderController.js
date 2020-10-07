const { Order } = require("../models");

const OrderController = {
    async getAll(req,res){
        try {
            const value = await Order.findAll();
            res.send(value);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get order'});
        }
    },
    async getById(req,res){
        try {
            const value = await Order.findByPk(req.params.id);
            res.send({value});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get movie selected'});
        }
    },
}

module.exports = OrderController;