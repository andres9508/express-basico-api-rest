import { response, request } from "express";

// loscontroladores son solo funciones q se exportan para ser usadas por la ruta

export const getUser = (req = request, res = response) => {
  const { name, edad, userid, limit = 10, page = 1 } = req.query;

  res.json({
    mss: "users GET success- controller",
    userid,
    name,
    edad,
    limit,
    page,
  });
};

//obteniendo datos de los prametros
export const putUser = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    mss: "users PUT success - controller",
    id,
  });
};

//obteniendo datos del json en post
export const postUser = (req = request, res = response) => {
  const body = req.body;
  res.json({
    mss: "users POST success - controller",
    body,
  });
};

export const patchUser = (req, res = response) => {
  res.json({
    mss: "users PATCH success - controller",
  });
};

export const deleteUser = (req, res = response) => {
  res.json({
    mss: "users DELETE  - controller",
  });
};
