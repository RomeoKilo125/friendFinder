let path = require('path');

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, './app/public/survey.html'))
  });

  module.exports = function(app) {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './app/public/home.html'))
    });

};
