const express = require("express");
const app = express();
const port = 3000;
const { spawn } = require("child_process");
const { logger } = require("./webhook/winston")
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req, res) => {
  const child = spawn("gatsby", ["build"], { stdio: "inherit" });
  child.on("exit", function (code, signal) {
    if (code !== 0) {
      // replace with winston logger
      logger.error("child process exited with " + `code ${code} and signal ${signal}`)
      res.send("child process exited with " + `code ${code} and signal ${signal}`)
    }
    logger.info('success')
    res.send('success')
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
