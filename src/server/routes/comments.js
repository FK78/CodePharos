import express from "express";
import db from "../../database/index.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.many("SELECT * FROM comments")
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get("/:id", (req, res) => {
  db.one("SELECT * FROM comments WHERE id = $1", [req.params.id])
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post("/", validate(["post_id", "user_id", "content"]), (req, res) => {
  const { post_id, user_id, content } = req.body;
  db.one(
    "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
    [post_id, user_id, content],
  )
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.one("DELETE FROM comments WHERE id= $1", id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
});

export default router;
