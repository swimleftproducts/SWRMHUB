 const noobinController = require('../controllers/noobinController')

module.exports =(app)=>{
  app.get('/api/noobin/provision/:mac',noobinController.provision)

  
}