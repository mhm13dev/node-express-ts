import express from "express";

export const APIRoutes = express.Router();

APIRoutes.get("/", (_req, res) => {
  res.json({
    message: "Hello From Node.js, Express, and TypeScript!",
  });
});
