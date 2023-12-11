import bcrypt from "bcryptjs";
import gravatar from 'gravatar';
import { nanoid } from "nanoid";

import User from "../../models/User.js";
import { HttpError, sendEmail } from "../../helpers/index.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";

const { BASE_URL } = process.env;

const signup = async (req, res) => {
    const {email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw HttpError(409, "Email in use");
    }

    // Генерування URL Gravatar
    const avatarURL = gravatar.url(email);

    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = nanoid();

    const newUser = await User.create({...req.body, password: hashPassword, subscription, avatarURL, verificationToken});

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>`
    }
    await sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL
        }
    })
}

export default ctrlWrapper(signup);