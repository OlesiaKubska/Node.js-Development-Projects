import bcrypt from "bcryptjs";
import gravatar from 'gravatar';

import User from "../../models/User.js";
import { HttpError } from "../../helpers/index.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";

const signup = async (req, res) => {
    const {email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw HttpError(409, "Email in use");
    }

    // Генерування URL Gravatar
    const avatarURL = gravatar.url(email);

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({...req.body, password: hashPassword, subscription, avatarURL});

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL
        }
    })
}

export default ctrlWrapper(signup);