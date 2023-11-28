import ctrlWrapper from "../../decorators/ctrlWrapper.js";

const getCurrent = async (req, res) => {
    const { subscription, email } = req.user;

    res.json({
        subscription,
        email,
    })
}

export default ctrlWrapper(getCurrent);