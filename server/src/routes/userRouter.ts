import { Router, NextFunction, Request, Response } from "express";
import { createUser, loginUser } from "../services/userServices";
import User from "../models/UserModel";
import { UserRegisterPayloadType } from "types";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {  
    const payload = req.body as UserRegisterPayloadType;

    if (!payload.email || !payload.fullName || !payload.password) {
      res.status(400).json("Missing required paramaters");
    } else {
        try {
            const existingUser = await User.findOne({ email: payload.email });
            if (existingUser) {
                res.status(401).json("Email address not available!");
            } else {
                const user = await createUser(payload);
                req["user"] = user;
            }
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }
});

export default router;