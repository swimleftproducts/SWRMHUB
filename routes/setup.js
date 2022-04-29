 const setupController = require('../controllers/setupController')

module.exports =(app)=>{
  app.get('/api/setup/clearUsers',setupController.clearUsers)
  app.get('/api/setup/clearsessions',setupController.clearSessions)
}