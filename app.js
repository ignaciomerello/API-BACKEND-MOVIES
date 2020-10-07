const express = require('express');

const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

const PORT = 3000;

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined
app.use("/movie", movieRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.listen (PORT, () => console.log('Server running' + PORT));