import { Router } from "express";

/* import urlRouter from "./urlRouter";
import userRouter from "./userRouter"; */

const router = Router();

router.get("/url", (req, res) => res.status(200).send("Haiiii"));

export default router;