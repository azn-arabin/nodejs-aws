import { Router } from "express";

const router = Router();

router.get("/others/hello", (req, res) => {
  res.json("Hello world!");
});

router.get("/others/new", (req, res) => {
  res.json("This is the new one to check auto deployment!");
});

export default router;
