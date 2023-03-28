const md5 = require("md5");
import { codeStatus } from "../../code";
import {
  userNameValidator,
  passWdValidator,
  affirmPassWordValidator,
} from "../../validator";
let validator: any;
const { generateToken } = require("../../token");


// 登录
const login = (req: any, res: any): Boolean => {
  var status = codeStatus(200, "登录成功");

  var { userName, passWord } = req.body;
  // 密码
  validator = passWdValidator(passWord ?? "");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }
  // 用户名
  validator = userNameValidator(userName);
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  if(status.code == 200) {
    const password = md5(passWord);
    const token = generateToken({userName, password});
    status.body.token = token;
    req.session.username = userName;
    req.session.password = password;
  }
  res.json(status);
  return false;
};

// 注册
const rego = (req: any, res: any): void => {
  var status = codeStatus(200, "注册成功");
  var { userName, passWord, affirmPassWord } = req.body;

  // 两次密码校验
  validator = affirmPassWordValidator(passWord, affirmPassWord);
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  // 用户名
  validator = userNameValidator(userName);
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }
  res.json(status);
};

module.exports = {
  login,
  rego,
};
