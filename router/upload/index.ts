import { codeStatus } from "../../code";
import { logger } from "../../config";
import { removeProtemFiles } from '../../script';
const uploadLog = logger.getLogger("upload");

// 图片上传
export const uploadImage = (req: any, res: any): void => {
  var status = codeStatus(200, "上传成功");
  removeProtemFiles();
  uploadLog.error(`filename -----> ${req.file?.filename}`);

  if(req.file == undefined) {
    status = codeStatus(400, "缺少必要上传的文件/名称");
  } else {
    status.body['filename'] = req.file.filename;
    status.body['size'] = req.file.size;
    status.body['mimetype'] = req.file.mimetype;
  }
  res.json(status);
};
