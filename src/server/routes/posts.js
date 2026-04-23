import express from "express";
import db from "../../database/index.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  db.many("SELECT * FROM posts")
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  db.one("SELECT * FROM posts WHERE id = $1", [req.params.id])
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post(
  "/",
  validate(["user_id", "title", "content", "category"]),
  (req, res, next) => {
    const { user_id, title, content, category } = req.body;
    db.one(
      "INSERT INTO posts (user_id, title, content, category) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, title, content, category],
    )
      .then((data) => {
        res.status(201).json(data);
      })
      .catch(next);
  },
);

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  db.one("DELETE FROM posts WHERE id = $1 RETURNING *", id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
});

export default router;
