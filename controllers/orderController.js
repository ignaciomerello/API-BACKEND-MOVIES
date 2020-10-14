const { Order } = require("../models");

const OrderController = {
    async getAll(req,res){
        try {
            const orders = await Order.findAll();
            res.send(orders);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get order'});
        }
    },
    async getById(req,res){
        try {
            const order = await Order.findByPk(req.params.id);
            if(!order){
                return res.status(400).json({message:'Order was not found'}); 
            }
            res.send(order);

        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to get order selected'});
        }
    },
    async create(req,res){
        try {
            const order = await Order.create({UserId:req.user.id});
            await order.addMovie(req.body.movies);
            res.send(order);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Unable to insert order'});
        }
    },
}

module.exports = OrderController;