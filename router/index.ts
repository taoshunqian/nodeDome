var express = require("express");
const fs = require("fs");
var router = express.Router();
import { uploadSeat } from "../utils";


let res_jsFiles: any = {};
function modulesFilesFn() {
  const api = fs
    .readdirSync(__dirname)
    .filter((value: any) => {
      return value !== "index.ts";
    })
    .map((value: any) => require(__dirname + "/" + value));
  for (var item of api) {
    Object.keys(item).forEach((val: any, index: number) => {
      let comp = Object.values(item)[index];
      res_jsFiles[val] = comp;
    });
  }
  return res_jsFiles;
}
modulesFilesFn();

router.post("/login", res_jsFiles.login); // 登录
router.post("/registration", res_jsFiles.rego); // 注册

router.post("/editClassifyInfo", res_jsFiles.editClassifyInfo);
router.post("/editArticle", res_jsFiles.editArticleInfo);

router.post("/uploadImage", uploadSeat.single("file"), res_jsFiles.uploadImage); // 上传图片

router.get("/classifyList", res_jsFiles.classifyList);
router.get("/articleList", res_jsFiles.articleList);

module.exports = router;
