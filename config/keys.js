//THIS IS REGULAR KEYS
// IN WHICH ENVIRONMENT WE ARE CHECKING
if (process.env.NOD_ENV === 'production') {
    //for server
    module.exports = require('./keys_prod');
} else {
    //for local machine
    module.exports = require('./keys_dev');
}