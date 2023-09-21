import express from 'express';

import citiesController from '../controllers/cities/citiesController.js'

const citiesRouter = express.Router();

// citiesRouter.get('/', function (req, res, next) {
//     res.json({
//         message: "Cities Router",
//         status_code: 0,
//     });
//     next();
// });

// Define endpoints for cities
citiesRouter.get('/', citiesController.read);
citiesRouter.post('/create', citiesController.create);
citiesRouter.put('/update/:_id', citiesController.update);
citiesRouter.delete('/delete/:_id', citiesController.remove);

export default citiesRouter;

