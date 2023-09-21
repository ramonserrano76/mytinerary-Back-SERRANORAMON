import './config/database.js'; // Import db conection
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter.js';
import citiesRouter from './routes/citiesRouter.js';
import authRouter from './routes/authRouter.js';
import { __dirname } from './utils.js';

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('Time: ', new Date().getFullYear());
  next(); // Llama a next() para pasar la solicitud al siguiente middleware
});

app.get('/api', (req, res, next) => {
  console.log('hicieron una solicitud al servidor ' + req.url, 'a la hora:', new Date().toLocaleTimeString());
  console.log(req.method);
  next();
}, indexRouter)

app.get('/', (req, res, next) => {
  res.render('index', { title: 'express' });
  next();
});
// Router
app.use('/api/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/cities', citiesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error 500 page
  res.status(err.status || 500);
  res.render('error');
});

export default app;