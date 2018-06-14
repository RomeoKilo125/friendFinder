let friends = require('../data/friends')

function calculateScore(f1, f2) {
  let score = 0;
  for (i = 0; i < f1.length; i++) {
    score += Math.abs(+f1[i] - f2[i]);
  }
  return score
}

function findMatch(sub) {
  let result;
  let score = 50;
  for (friend of friends) {
    // console.log(friend);
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
    console.log(match);

    res.json(match);

  });

}
