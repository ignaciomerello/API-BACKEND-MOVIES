const express = require('express');

const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); //middleware: parses the JSON body not allowing the req.body to return undefined
app.use("/movies", movieRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.listen (PORT, () => console.log('Server running' + PORT));