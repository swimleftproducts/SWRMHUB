module.exports={
  getDbConnectionString:function(){     
      //production is running on the hub, dev runs on desktop
      if(process.env.NODE_ENV ==="dev"){
      console.log("Connecting to dev db")
      return `mongodb+srv://${process.env.DBUNAMEDEV}:${process.env.DBPWDDEV}@development.ykfym.mongodb.net/${process.env.DBNAMEDEV}?retryWrites=true&w=majority`}
      else if(process.env.NODE_ENV ==="production"){
      return `mongodb+srv://${process.env.DBUNAME}:${process.env.DBPWD}@cluster0.d6dt5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  }
  }
}
