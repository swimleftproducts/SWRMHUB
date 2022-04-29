const { User } = require('../models');
const { ApiError } = require('../errorHandling/errorHandler');
const {MongoClient} = require('mongodb');
const {getDbConnectionString} = require('../config/dbConfig');

module.exports = {
  async clearUsers (req,res,next){
    User.deleteMany({})
    .then(() => { 
      res.send('all users deleted')
     })
  },
  async clearSessions (req,res,next){
    const uri = getDbConnectionString()
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await req.session.destroy();
        await client.connect();
        const sessions_result=  await client.db(`${process.env.DBNAMEDEV}`).collection("sessions").deleteMany({});
       // console.log(sessions_result)
       await client.close();
       
       res.send("cleared")

       return
    } catch (e) {
        console.error(e);

    }
    res.send("failed")
  }
};



