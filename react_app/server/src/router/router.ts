import { Router } from "express";
import app from "./app.route";
import user from "./user.route";

const router = Router();
const defaultRoute = [
  {
    path: "/app",
    route: app,
  },
  {
    path: "/user",
    route: user,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
