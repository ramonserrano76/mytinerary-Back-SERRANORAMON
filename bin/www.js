#!/usr/bin/env node
/**
 * Module dependencies.
 */
import 'dotenv/config.js';
import app from '../app.js';
import logger from 'debug';
const debug = logger('mytinerary-back-serranoramon:server');
import http from 'http';
import { Server } from "socket.io";

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8090');
app.set('port', port);

/**
 * Create HTTP server.
 */

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Escuchar un evento para obtener datos de la ciudad
  socket.on('getCityData', async (_id) => {
    try {
      // Realiza una consulta a la base de datos para obtener los datos de la ciudad
      const cityData = await City.findById(_id); // Reemplaza CityModel y findById con tus propios métodos y modelos de base de datos

      // Verificar si la ciudad se encontró en la base de datos
      if (!cityData) {
        // Si no se encontró, envía una respuesta vacía o un mensaje de error
        socket.emit('cityData', null);
      } else {
        // Si se encontró, envía los datos de la ciudad al cliente
        socket.emit('cityData', cityData);
      }
    } catch (error) {
      // Manejar errores de consulta a la base de datos
      console.error(error);
      socket.emit('cityData', null); // Puedes enviar un mensaje de error al cliente
    };

    // Envía los datos de la ciudad al cliente
    socket.emit('cityData', cityData);
  });

  // Escuchar un evento para actualizar datos de la ciudad
  socket.on('updateCityData', (updatedCityData) => {
    // Realiza tu lógica para actualizar los datos de la ciudad aquí

    // Envía la actualización a todos los clientes conectados
    io.emit('cityDataUpdated', updatedCityData);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port, () => console.log('Server ready on port ' + port));
httpServer.on('error', onError);
httpServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = httpServer.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
