var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {connectDB} = require('./config/db')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var serverRouter = require('./routes/server');
var bootcamps = require('./routes/bootcamps');
const users = require('./routes/users')
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express'); 
const colors =  require('colors')
const errorHandler = require('./middlewares/errorHandler')
var app = express();
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' });
connectDB()

const definition  = {  
  // swaggerDefinition: {  
      info: {  
          title:'Dev Camper',  
          version:'1.0.0',  
          description: 'Dev Camper Rest Api'
      }  
  // },  
} 
const options = {
  definition ,
  apis: ['./routes/bootcamps.js']
} 
const swaggerDocs = swaggerJSDoc(options);  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocs)); 

//Routes 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/server', serverRouter);
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/users', users);
app.use(errorHandler)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
