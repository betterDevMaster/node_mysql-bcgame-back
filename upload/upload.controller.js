const express = require("express");
const router = express.Router();
const authorize = require("_middleware/authorize");
const upload = require("_middleware/upload");

// routes
router.post("/", authorize(), upload.single("file"), uploadFunc);

module.exports = router;

function uploadFunc(req, res) {
  try {
    if (req.file == undefined) {
      return res.json({ status: false, message: "You must select a file." });
    }
    return res.json({ status: true, message: "File Uploaded.", file: req.file });
  } catch (error) {
    return res.json({
      status: false,
      message: `Error when trying upload images: ${error}`,
    });
  }
}
