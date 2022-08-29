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
  const { username, avatar } = req.body;
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(reverseTweets());
});

function reverseTweets() {
  const Tweets = [...tweets].reverse();
  if (tweets.length >= 0 && tweets.length <= 10) return Tweets;

  const newArrayTweets = [];
  let cond = 0;
  while (cond < 10) {
    newArrayTweets.push(Tweets[cond]);
    cond++;
  }
  return newTweets;
}

app.listen(5000);
