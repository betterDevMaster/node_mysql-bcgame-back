require("rootpath")();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/error-handler");
global.__basedir = __dirname;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cors());

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/socials", require("./socialAuth/social.controller"));
app.use("/games", require("./games/games.controller"));
app.use("/coins", require("./coins/coins.controller"));
app.use("/upload", require("./upload/upload.controller"));
app.use("/payments", require("./payments/payments.controller"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log("Server listening on port " + port));

const baseDir = `${__dirname}/../react_bcgame-front/build`;
// const baseDir = `${__dirname}/build`;

app.use('/resources', express.static(__dirname + '/resources'));

app.use("/", express.static(`${baseDir}`));
app.all("/*", function (req, res) {
  res.sendFile("index.html", { root: baseDir });
});
