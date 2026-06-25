const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Pratham. Hope you are doing good 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3001");
});