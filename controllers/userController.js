const { User,Order } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../config/nodemailer');


const UserController = {

        async signup(req, res) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 9);
                // req.body.confirmed = false;
                const user = await User.create(req.body);
                // const emailToken = jwt.sign({ id: user.id }, process.env.SECRET_EMAIL_JWT, { expiresIn: '48h' })
                // const emailConfirmationLink = process.env.API_URL + '/users/confirm/' + emailToken
                // await transporter.sendMail({
                //     to: user.email,
                //     subject: 'Welcome to Sequelize movies, please confirm your email ✔',
                //     html: `
                //     <h2>Welcome to Sequelize movies</h2>
                //     <a href="${emailConfirmationLink}">Click here to confirme your email</a>
                //     <span>The link above will expire in 48 hours</span>
                //     `,
                // });
    
                res.status(201).send(user)
            } catch (error) {
                console.error(error);
                res.status(500).send({
                    error,
                    message: 'There was a problem trying to register the user'
                })
            }
        },
        async login(req, res) {
            try {
                const user = await User.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                
                if (!user) {
                    return res.status(400).send({
                        message: 'Wrong credentials'
                    })
                }
                // if (!user.confirmed) {
                    //     return res.status(400).send({
                        //         message: 'Confirm your email'
                        //     })
                        // }
                    const isMatch = await bcrypt.compare(req.body.password, user.password)
                        if (!isMatch) {
                    return res.status(400).send({
                        message: 'Wrong credentials'
                    })
                }
                //PROCESS.ENV NOT WORKING 
                const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH_JWT, { expiresIn: '30d' });
                // const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH_JWT, { expiresIn: '30d' });
                user.token = token; //añade el token a la instancia user
                await user.save() // valida & actualiza en la base de datos la instancia de user
                res.send(user);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to login' })
            }
    
        },

    async getAll(req,res){
        try {
            const value = await User.findAll({ include:[{model:Order}] });
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
    async delete(req, res) {
        try {
            const value = await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send({
                message: 'User successfully removed'
            })
        

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Unable to delete the Movie'
            });
        }
    },
    
}

module.exports = UserController;