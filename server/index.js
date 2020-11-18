const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.set("port", process.env.PORT || 3000);
// Opening port..
app.listen(app.get("port"), () => {
  console.log("Opening..");
});
