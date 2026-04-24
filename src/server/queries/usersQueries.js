import db from "../../database/index.js";

export function getAll() {
  return db.many("SELECT * FROM users");
}

export function getById(id) {
  return db.one("SELECT * FROM users WHERE id = $1", [id]);
}

export function create({ username, email, password, role }) {
  return db.one(
    "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
    [username, email, password, role],
  );
}

export function remove(id) {
  return db.none("DELETE FROM users WHERE id= $1", id);
}
