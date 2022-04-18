const express = require("express");

const app = express();

const port = 3000

const rooms = {
    "rooms": [],
    "messages": ['hello']
}

app.get('/users', (req, res) => {
  res.send(req.header("user-agent"))
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
