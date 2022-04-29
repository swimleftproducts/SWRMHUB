module.exports = {
  register(req, res, next) {
    res.send('hit register route');
  },
  login(req, res, next) {

    res.send('hitloginroute');
  },
  logout(req, res, next) {
    res.send('hit logout route');
  },
  isAuthenticated(req, res, next) {
    res.send('hit authenticated route');
  },

};



