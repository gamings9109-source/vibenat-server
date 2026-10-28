"use strict";

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));

const startedAt = Date.now();

app.get("/", (req, res) => {
  res.json({
    name: "VibeNAT",
    status: "online",
    version: "1.1.0",
    message: "VibeNAT server is running",
    endpoints: [
      "/health",
      "/nat/status"
    ]
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptimeSeconds: Math.floor(process.uptime())
  });
});

app.get("/nat/status", (req, res) => {
  res.json({
    name: "VibeNAT",
    server: "online",
    engine: "not_connected",
    packetForwarding: "not_implemented",
    activeMappings: 0,
    uptimeSeconds: Math.floor(process.uptime()),
    startedAt: new Date(startedAt).toISOString(),
    message:
      "Server is online, but real internet packet forwarding is not configured."
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("VibeNAT server listening on port " + PORT);
});
