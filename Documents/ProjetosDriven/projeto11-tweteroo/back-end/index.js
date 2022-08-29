import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const Users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send("Preencha todos os campos!");
  }

  Users.push({ username, avatar });

  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  console.log(req);
  res.send("tudo certo");
});

app.listen(5000);
