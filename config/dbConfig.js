module.exports={
  getDbConnectionString:function(){     
      //production is running on the hub, dev runs on desktop
      if(process.env.NODE_ENV ==="dev_cloud"){
        console.log("Connecting to dev db")
        return `mongodb+srv://${process.env.DBUNAMEDEV}:${process.env.DBPWDDEV}@development.ykfym.mongodb.net/${process.env.DBNAMEDEV}?retryWrites=true&w=majority`}
        
      else if(process.env.NODE_ENV ==="dev_local"){
        console.log("Connecting to local dev db")
        return `mongodb://${process.env.DBUNAMEDEVLOCAL}:${process.env.DBPWDDEVLOCAL}@localhost:27017/${process.env.DBNAMEDEVLOCAL}`
      }
      else if(process.env.NODE_ENV ==="hub_dev"){
          console.log("Connecting to hub local dev db")
          return `mongodb://${process.env.DB_UNAME_PROD_LOCAL}:${process.env.DB_PWD_PROD_LOCAL}@localhost:27017/${process.env.DB_NAME_PROD_LOCAL}`
       }
  }
}
