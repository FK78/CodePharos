import express from "express";
import { validate } from "../middleware/validate.js";
import * as commentsController from "../controllers/commentsController.js";

const router = express.Router();

router.get("/", commentsController.getAll);

router.get("/:id", commentsController.getById);

router.post(
  "/",
  validate(["post_id", "user_id", "content"]),
  commentsController.create,
);

router.delete("/:id", commentsController.remove);

export default router;
