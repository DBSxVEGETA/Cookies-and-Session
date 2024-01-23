const express = require("express");
const session = require("express-session");
const app = express();

app.get("/viewcount", (req, res) => {
  if (req.session.viewcount) {
    req.session.viewcount += 1;
  } else {
    req.session.viewcount = 1;
  }
  res.send(`You are viewing this page ${req.session.viewcount} times`);
});

app.listen("3000", () => {
  console.log("Express server started at port 3000");
});
