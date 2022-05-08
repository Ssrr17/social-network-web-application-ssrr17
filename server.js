const connect = require("./config/connection");
const express = require("express");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)
// app.use(express.static('public'));

app.use(require("./routes/api"));
connect.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});
