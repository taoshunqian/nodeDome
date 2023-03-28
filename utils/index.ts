const multer = require("multer");
import { upload } from '../config';

const storage = multer.diskStorage({
  destination(req: any, file: any, cb: any) {
    cb(null, upload);
  },
  filename(req: any, file: any, cb: any) {
    var name = file.originalname.split(".")
    cb(null, Date.now() + "." + name[name.length - 1]);
  },
});

export const uploadSeat = multer({ storage: storage });
