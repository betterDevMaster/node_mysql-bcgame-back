const multer = require("multer");
const fs = require("fs");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    var dir = __basedir + "/resources/uploads/" + req.body.uploadPath + "/";
    var fileName = `${req.body.uploadPath}-${file.originalname}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    else if (fs.existsSync(dir + fileName) == true)
      cb("File duplicated.", false);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.uploadPath}-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
