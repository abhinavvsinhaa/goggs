const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const sanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//Importing Routers
const userRouter = require('./routes/userRoute');
const generateRouter = require('./routes/generateRouter')
const loginRouter = require('./routes/loginRouter');

const app = express();

const corsOptions = {
  origin: true,
  credentials: true, 
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(helmet());
console.clear();
if (process.env.MODE == 'DEV') {
  app.use(morgan('dev'));
}

app.use(sanitize());
app.use(xss());

const limiter = rateLimit({
  max: 1200,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests, try after sometime'
});

app.use('/api', limiter);

app.use(hpp({ whitelist: [] }));

app.use(express.json({ limit: '500kb' }));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/generate', generateRouter);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server`);
  err.statusCode = 404;
  next(err); 
});

module.exports = app;
