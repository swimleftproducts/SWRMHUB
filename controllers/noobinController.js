module.exports={
  test(req,res,next){
    res.send('hi there')
    console.log('example route')
  },
  provision(req,res,next){
    console.log("mac is :",req.params.mac)
    res.send("thanks");
  }
}