import * as usersQueries from "../queries/usersQueries.js";

export async function getAll(req, res) {
  const users = await usersQueries.getAll();
  res.status(200).json(users);
}

export async function getById(req, res) {
  const user = await usersQueries.getById(req.params.id);
  res.status(200).json(user);
}

export async function create(req, res) {
  const user = await usersQueries.create(req.body);
  res.status(201).json(user);
}

export async function remove(req, res) {
  const { id } = req.params;
  await usersQueries.remove(id);
  res.status(204).send();
}
