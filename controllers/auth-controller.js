import User from "../models/User";
import { HttpError } from "../helpers/index.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const signup = async (req, res) => {
    
}

export default {
    signup: ctrlWrapper(signup),
}

