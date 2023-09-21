import express from 'express';
import citiesRouter from './citiesRouter.js';
import authRouter from './authRouter.js';
const indexRouter = express.Router();

indexRouter.use((req, res, next) => {
    console.log('Time: (router): ', new Date().getFullYear());
    next();
});


// Rutas para cities
indexRouter.use('/cities', citiesRouter);
// Rutas para Auth
indexRouter.use('/auth', authRouter);


export default indexRouter;