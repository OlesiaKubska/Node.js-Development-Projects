import fs from "fs/promises";
import path from "path";
import Jimp from "jimp";

import User from "../../models/User.js";
import { HttpError } from "../../helpers/index.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";

const updateAvatar = async (req, res) => {
    if (!req.file) {
        throw new HttpError(400, "No image file provided");
    }

    const { _id } = req.user;
    const { path: tmpPath, filename } = req.file;

    try {
        const image = await Jimp.read(tmpPath);
        await image.resize(250, 250).quality(60).writeAsync(tmpPath);

        const newPath = path.join("public", "avatars", filename);

        await fs.rename(tmpPath, newPath);

        const avatarURL = `/avatars/${filename}`;
        await User.findByIdAndUpdate(_id, { avatarURL });

        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(tmpPath);
        throw error;
    }
};

export default ctrlWrapper(updateAvatar);