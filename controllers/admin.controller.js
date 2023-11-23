import { response } from "express";

export const getAdmin = (req, res = response) => {
  res.json({
    mss: "admin GET controller",
  });
};
export const postAdmin = (req, res = response) => {
  res.json({
    mss: "admin POST controller",
  });
};

export const putAdmin = (req, res = response) => {
  res.json({
    mss: "admin PUT controller",
  });
};

export const patchAdmin = (req, res = response) => {
  res.json({
    mss: "admin PATCH controller",
  });
};

export const deleteAdmin = (req, res = response) => {
  res.json({
    mss: "admin DELETE controller",
  });
};
