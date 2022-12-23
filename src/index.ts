import express from "express";
import dotenv from "dotenv";

import { APIRoutes } from "./routes/api.js";

// Load environment variables as soon as possible in the app
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

// Create Express server
const app = express();

// API routes
app.use("/api", APIRoutes);

// Redirect / to /api
app.get("/", (_req, res) => {
  res.redirect("/api");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
