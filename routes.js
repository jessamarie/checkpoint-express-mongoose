const apiRoutes = require('./api/apiRoutes')

module.exports = function routesConfig (app) {
  app.use('/', apiRoutes)
}
