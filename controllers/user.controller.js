import { response } from "express";
// loscontroladores son solo funciones q se exportan para ser usadas por la ruta

export const getUser = (req, res = response) => {
  res.json({
    mss: "users GET success- controller",
  });
};

export const putUser = (req, res=response) => {
  res.json({
    mss: "users PUT success - controller",
  });
};

export const postUser = (req, res=response) => {
  res.json({
    mss: "users POST success - controller",
  });
};

export const patchUser = (req, res=response) => {
  res.json({
    mss: "users PATCH success - controller",
  });
};

export const deleteUser = (req, res=response) => {
  res.json({
    mss: "users DELETE  - controller",
  });
};
