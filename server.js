const express = require("express");
const User = require("./models").user;
const Todolist = require("./models").todolist;
const Todoitem = require("./models").todoitem;

const app = express();
app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const userById = await User.findByPk(userId);
  if (!userById) {
    res.status(404).send("User is not found");
  } else {
    res.send(userById);
  }
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
