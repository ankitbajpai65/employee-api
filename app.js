const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const data = require("./data.json");

app.get("/", (req, res) => {
    res.json({ data: data });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})