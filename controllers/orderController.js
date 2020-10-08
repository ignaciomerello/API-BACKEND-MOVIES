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
            if(!value){
                return res.status(400).json({message:'Order was not found'}); 
            }
            res.send(value);

        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get order selected'});
        }
    },
    async create(req,res){
        try {
            const value = await Order.create(req.body);
            res.send(value);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get order selected'});
        }
    },
}

module.exports = OrderController;