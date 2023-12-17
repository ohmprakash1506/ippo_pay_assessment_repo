import { Router } from "express";
import App from "../controllers/app.controller";

const router = Router();
const app = new App();

router.get("/response", app.console);

export default router;
