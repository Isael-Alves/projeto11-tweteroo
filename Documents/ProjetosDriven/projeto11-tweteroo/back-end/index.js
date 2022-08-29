import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const Users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar)
    return res.status(400).send("Preencha todos os campos!");

  Users.push({
    username: username,
    avatar: avatar,
  });

  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  tweets.push({
    username: username,
    tweet: tweet,
  });

  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(reverseTweets());
});

function reverseTweets() {
  const Tweets = [...tweets].reverse();
  let Avatar = "";
  let loop = 10;
  
  if (tweets.length >= 0 && tweets.length <= 10) {
    loop = tweets.length;
  }

  const newArrayTweets = [];
  let cont = 0;
  while (cont < loop) {
    for (let i = 0; i < Users.length; i++) {
      if (Tweets[cont].username === Users[i].username) {
        Avatar = Users[i].avatar;
        Tweets[cont].avatar = Avatar;
      }
    }

    newArrayTweets.push(Tweets[cont]);
    cont++;
    Avatar = "";
  }
  return newArrayTweets;
}

app.listen(5000);
