const express = require('express');
const { getAllPlanets } = require('./planets.controller');

const plantesRouter = express.Router();

plantesRouter.get('/planets', getAllPlanets);

module.exports = plantesRouter;
