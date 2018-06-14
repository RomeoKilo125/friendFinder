let friends = require('../data/friends')

function findMatch(sub) {
  let result = "";
  let score = 50;
  for (friend in friends) {
    let test = calculateScore(sub.scores, friend.scores);
    if (test < score) {
      score = test;
      result = friend;
    }
  }
  return result;
}

module.exports = function(app) {

  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    let newFriend = req.body;
    
    let match = findMatch(newFriend)
    res.json(match);

    friends.push(newFriend);

  });

}
