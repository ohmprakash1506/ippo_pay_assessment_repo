import { Router } from "express";
import app from "./app.route";

const router = Router();
const defaultRoute = [
  {
    path: "/app",
    route: app,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
