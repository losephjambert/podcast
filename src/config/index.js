process ? process : { env: { NODE_ENV: 'test' } }; // tests run in Electron, process is not defined.

module.exports = require('./' + (process.env.NODE_ENV || 'development'));
