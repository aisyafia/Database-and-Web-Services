const express = require("express");
const { Router } = express;
const router = new Router();
// const app = express();
// const port = 4002;

router.get("/", (req, res) => {
  res.send("separated");
});

module.exports = router;

// router.get("/hi/:name", (req, res) => {
//   const nameToHi = req.params.name;
//   res.send(`Hi ${nameToHi}`);
// });

// app.use(router);

// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "We received your request body!",
//   });
// });
// app.listen(port, () => console.log("listening on port " + port));
