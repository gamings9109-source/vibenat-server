const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));

app.get("/", (req, res) => {
res.json({
name: "VibeNAT",
status: "online",
version: "1.1.0",
message: "VibeNAT control API is running",
gateway: "not_configured",
internet_forwarding: false
});
});

app.get("/health", (req, res) => {
res.json({
status: "ok",
service: "vibenat-control-api"
});
});

app.get("/api/gateway/status", (req, res) => {
res.json({
success: true,
gateway_configured: false,
packet_forwarding: false,
message: "A separate gateway server is required"
});
});

app.listen(PORT, "0.0.0.0", () => {
console.log("VibeNAT control API listening on port " + PORT);
});
