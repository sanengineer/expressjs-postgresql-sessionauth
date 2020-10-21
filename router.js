const router = require("express").Router();

const passport = require("./lib/passport");
// controllers
const auth = require("./controllers/authController");

// middlewares
const restrict = require("./middlewares/restrict");

// homepage
router.get("/", restrict, (req, res) => res.render("index"));

// register page
router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

// login page
router.get("/login", (req, res) => res.render("login"));

// whoami
router.get("/whoami", restrict, auth.whoami);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/whoami",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.post("/login", auth.login);

module.exports = router;
