import { Router } from "express";
import User from "../controllers/user.controller";

const user = new User();
const route = Router();

route.get("/all", user.all);
route.get("/user/:id", user.userId);
route.post("/create", user.create);
route.put("/update/:id", user.update);
route.delete("/delete/:id", user.delete);

export default route;
