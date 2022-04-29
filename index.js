//general imports
require('dotenv').config()
const path = require('path')
const {apiErrorHandler} = require('./errorHandling/errorHandler')

//basic express setup
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

//database connection
require('./models')

//middleware
const authMiddleware = require('./middleware/authMiddleware')
authMiddleware(app)
const generalMiddleware = require('./middleware/generalMiddleware')
generalMiddleware(app)


// routes
const setupRoutes = require('./routes/setup')
setupRoutes(app)
const authRoutes = require('./routes/auth')
authRoutes(app)
const userRoutes = require('./routes/user')
userRoutes(app)
const noobinRoutes = require('./routes/noobin')
noobinRoutes(app)


if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'hub_dev'){
  app.use(express.static('client/build'))
  app.get('/*',(req,res) => {
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))        
})
}

app.use(apiErrorHandler)

app.listen(port,() => {
  console.log('listening on PORT ',port )
})