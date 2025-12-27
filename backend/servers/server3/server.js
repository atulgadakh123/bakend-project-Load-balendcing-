const express = require("express");
const app = express();

const PORT = 3003;
const SERVER_NAME = "SERVER-3";

app.get("/", (req, res) => {
  res.json({
    message: "Response from backend",
    server: SERVER_NAME,
    port: PORT,
  });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`${SERVER_NAME} running on port ${PORT}`);
});
