const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.json({
name: "VibeNAT",
status: "online",
message: "VibeNAT server is running"
});
});

app.get("/health", (req, res) => {
res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
console.log("VibeNAT server listening on port " + PORT);
});
