const util = require("util");
const multer = require("multer");
const crypto = require("crypto");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if(err) cb(err);
      const fileName = `${hash.toString('hex')}-${file.originalname}`
      cb(null, fileName);
    })
  },
});

// Filter to accept only GLB files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'model/gltf-binary' && file.originalname.endsWith('.glb')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only GLB files are allowed.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;