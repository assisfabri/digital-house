const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/userRoute');
const middlewares = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);

app.all('*', middlewares.routeNotFound);

app.use(middlewares.handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});