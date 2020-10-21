const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const port = process.env.PORT || 8000;

// setting request body parser
app.use(express.urlencoded({ extended: false }));

// setting session handler
app.use(
  session({
    secret: "make secret",
    resave: false,
    saveUninitialized: false,
  })
);

// setting passport
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

console.log(`${passport}`);

// setting flash
app.use(flash());

// setting view engine
app.set("view engine", "ejs");

// setting router
const router = require("./router");
app.use(router);
app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
