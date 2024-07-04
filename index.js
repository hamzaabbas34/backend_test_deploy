const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("hi i am  here ");
});

app.listen(3001, () => {
	console.log("connected....");
});
