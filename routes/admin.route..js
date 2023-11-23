import { Router } from "express";
import {
  getAdmin,
  deleteAdmin,
  patchAdmin,
  postAdmin,
  putAdmin,
} from "../controllers/admin.controller.js";

const admin = Router();

admin.get("/", getAdmin);

admin.put("/", putAdmin);

admin.post("/", postAdmin);

admin.delete("/", deleteAdmin);

admin.patch("/", patchAdmin);

export default admin;
