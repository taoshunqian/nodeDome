const validator = require("validator");

interface infoValidator {
  validator: Boolean;
  msg: String;
}
export const isByteLength = (
  str = "",
  msg = "",
  min = 1,
  max = 80
): infoValidator => {
  var info: infoValidator = {
    validator: false,
    msg: "",
  };

  if (!validator.isByteLength(str, { min: min, max: max })) {
    info.msg = `${msg}长度不能小于${min},并且不能大于${max + 1}`;
    return info;
  }
  info.validator = true;
  return info;
};

export const isEmpty = (str = "", msg = ""): infoValidator => {

  
  var info: infoValidator = {
    validator: false,
    msg: "",
  };

  if (validator.isEmpty(str)) {
    info.msg = `${msg}不能为空`;
    return info;
  }
  info.validator = true;

  return info;
};

export const isInt = (str = "", msg = ""): infoValidator => {
  var info: infoValidator = {
    validator: false,
    msg: "",
  };

  if (!validator.isInt(str)) {
    info.msg = `${msg}必须为数字`;
    return info;
  }
  info.validator = true;
  return info;
};
