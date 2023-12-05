import multer from "multer";
import path from "path";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
    destination,
    filename: (req, file, cd) => {
        const uniquePrefix = `${Date.now()}_${Math.random(Math.random() * 1E9)}`;
        const filename = `${uniquePrefix}_${file.originalname}`;
        cd(null, filename);
    }
});

const limits = {
    fileSize: 5 * 1024 * 1024,
};

const upload = multer({
    storage,
    limits,
})

export default upload;