const validator = require('validator');

interface infoValidator {
    validator: Boolean,
    msg:String   
}

export const userNameValidator = (name = ""):infoValidator => {
    var info:infoValidator = {
        "validator": false,
        "msg": ""
    };

    if(validator.isEmpty(name)){
        info.msg = "用户名不能为空";
        return info;
    }
    info.validator = true;
    return info;
}
export const affirmPassWordValidator = 
(passwd = "",affirmPasswd = ""):infoValidator => {
    var info:infoValidator = {
        "validator": false,
        "msg": ""
    };

    if(validator.isEmpty(passwd)) {
        info.msg = "密码不能为空";
        return info;
    }

    if(validator.isEmpty(affirmPasswd)) {
        info.msg = "两次密码不相同,请确认";
        return info;
    }

    if(!validator.equals(passwd,affirmPasswd)) {
        
        info.msg = "两次密码不相同,请确认";
        return info;
    }


    info.validator = true;
    return info;
} 


export const passWdValidator = (name:any):infoValidator => {
    var info:infoValidator = {
        "validator": false,
        "msg": ""
    };

    if(validator.isEmpty(name)){
        info.msg = "密码不能为空";
        return info;
    }
    info.validator = true;
    return info;
}