import express from "express";
import { authController } from "../../controllers/auth-controllers/index.js";
import { authenticate, isEmtyBody} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSigninSchema, userSignupSchema } from "../../models/User.js";

const authRouter = express.Router();

authRouter.post("/users/register", isEmtyBody, validateBody(userSignupSchema), authController.signup);

authRouter.post("/users/login", isEmtyBody, validateBody(userSigninSchema), authController.signin);

authRouter.get("/users/current", authenticate, authController.getCurrent);

authRouter.post("/users/logout", authenticate, authController.signout);

authRouter.patch("/users", authenticate, authController.updateSubscription);

export default authRouter;