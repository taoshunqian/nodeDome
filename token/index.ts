const jwt = require("jsonwebtoken");
import { secretKey, secretHeader,noVerifyRouter } from "../config";
import { codeStatus } from "../code";

// 生成token
module.exports.generateToken = function (payload: any) {
  const token =
    secretHeader +
    jwt.sign(payload, secretKey, {
      expiresIn: 10 * 60 * 60,
    });
  return token;
};

// 验证token
module.exports.verifyToken = function (req: any, res: any, next: any) {
  if (noVerifyRouter.includes(req.originalUrl)) return next();
  var authorization = req.headers?.authorization;
  if (authorization == undefined)
    return res.json(codeStatus(404, "未获取到token, 登录无效"));
  const token = req.headers?.authorization.split(" ")[1];
  jwt.verify(token, secretKey, function (err: any, decoded: any) {
    if (err) {
      return res.json(codeStatus(404, "token 失效"));
    }
    next();
  });
};
