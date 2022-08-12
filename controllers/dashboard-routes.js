const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("dashboard", {  loggedIn: req.session.loggedIn });
});

router.get("/create", (req, res) => {
  res.render("create", {  loggedIn: req.session.loggedIn });
});

module.exports = router;
