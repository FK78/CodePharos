import express from "express";
import db from "../../database/index.js";
import { validateSensitive } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.many("SELECT * FROM users")
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.many("SELECT * FROM users WHERE id = $1", id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post(
  "/",
  validateSensitive(["username", "email", "password", "role"]),
  (req, res) => {
    const { username, email, password, role } = req.body;
    db.one(
      "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, password, role],
    )
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
);

export default router;
