import { Router } from "express";
import User from "../controllers/user.controller";

const user = new User();
const route = Router();

route.get("/all", user.all);
route.post("/create", user.create);
route.put("/update/:id", user.update);
route.delete("/delete/:id", user.delete);
route.delete("/delete", user.deleteAll);

export default route;
