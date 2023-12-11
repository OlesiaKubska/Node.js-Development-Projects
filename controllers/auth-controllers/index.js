import getCurrent from "./getCurrent.js";
import signin from "./signin.js";
import signout from "./signout.js";
import signup from "./signup.js";
import updateSubscription from "./updateSubscription.js";
import updateAvatar from "./updateAvatar.js";
import verify from "./verify.js";
import resendVerify from "./resendVerify.js";

export const authController = {
    getCurrent,
    signin,
    signout,
    signup,
    updateSubscription,
    updateAvatar,
    verify,
    resendVerify
};