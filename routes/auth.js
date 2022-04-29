const authController = require('../controllers/authController')

module.exports =(app)=>{
  // auth routes
  app.get('/api/auth/test',authController.test)
  app.post('/api/auth/register',authController.register)
  app.post('/api/auth/login',authController.login)
  app.get('/api/auth/logout',authController.logout)
  app.get('/api/auth/isauthenticated',authController.isAuthenticated)
}