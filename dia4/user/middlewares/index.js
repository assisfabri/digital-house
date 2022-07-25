const handleError = require('./errorMiddleware');
const routeNotFound = require('./RNFMiddleware');

module.exports = {
  handleError,
  routeNotFound,
};