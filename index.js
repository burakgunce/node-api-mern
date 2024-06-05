console.log("Hello there");

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });