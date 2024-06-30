import { Router } from "express";

const router = Router();

router.get("/others/hello", (req, res) => {
  res.json("Hello world!");
});

export default router;
