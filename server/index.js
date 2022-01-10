var express = require("express");
var app = express();

app.get("/priority", (req, res, next) => {
	res.json(["Urgent", "Regular", "Trivial"]);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
