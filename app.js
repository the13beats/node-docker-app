const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Prathmesh. Hope you are doing good 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3001");
});