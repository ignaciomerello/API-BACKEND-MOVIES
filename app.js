const express = require('express');

const app = express();

app.use(express.json());

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined

app.listen (PORT, () => console.log('Server running' + PORT));