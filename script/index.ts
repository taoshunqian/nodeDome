// node fs模块
const fs = require("fs");
// node path模块
const path = require("path");
import { upload } from "../config";
// 被读取的文件夹地址
const filePath = path.resolve(upload);

const arr = [];


// 删除文件
export const removeProtemFiles = () => {
  fs.readdir(filePath, function (err: any, files: any) {
    if (err) return console.error("Error:(spec)", err);
    files.forEach((filename: any) => {
      const filedir = path.join(filePath, filename);
      fs.stat(filedir, (eror: any, stats: any) => {
        if (eror) return console.error("Error:(spec)", err);
        if (formateTimeStamp(stats.birthtime)) {
          fs.unlink(`${filePath}/${filename}`, (rmError: any) => {
            if (rmError) return console.log("Error:(spec)", rmError);
            console.log(`${filePath}/${filename} 删除成功`);
          });
        }
      });
    });
  });
};

function formateTimeStamp(ti: any) {
  let isBool: Boolean = false;
  var birthday = new Date(ti).getTime(); //注意月份
  var differ = Date.now() - birthday;
  if (Math.round(differ / (24 * 60 * 60 * 1000)) > 0) {
    isBool = true;
  }
  return isBool;
}
