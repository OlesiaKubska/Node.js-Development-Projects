import ctrlWrapper from "../../decorators/ctrlWrapper.js";
import { HttpError, sendEmail } from "../../helpers/index.js";
import User from "../../models/User.js";

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(404, 'User not found');
    }
    if (user.verify) {
        throw HttpError(400, 'Verification has already been passed');
    }

    const verifyEmail = {
        to: email,
        subject: 'Confirm your registration',
        html: `<a target="_blank" href="${BASE_URL}/users/verify/${user.verificationToken}">Click to confirm your registration</a>`,
    };

    await sendEmail(verifyEmail);

    res.json({
        message: 'Verification email sent',
    });
};

export default ctrlWrapper(resendVerify);