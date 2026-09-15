const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, "uploads/");

    },

    filename(req, file, cb) {

        const unique =
            Date.now() +
            "-" +
            Math.round(Math.random() * 100000);

        cb(
            null,
            unique +
            path.extname(file.originalname)
        );

    }

});

const fileFilter = (req, file, cb) => {

    if (
        file.mimetype.startsWith("image/")
    ) {

        cb(null, true);

    } else {

        cb(new Error("Images only"));

    }

};

module.exports = multer({

    storage,

    fileFilter,

});