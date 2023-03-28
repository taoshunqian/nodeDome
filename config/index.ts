const log4js = require("log4js");
const path = require("path");
const LOG_PATH = path.join("", "logs");
log4js.configure({
  appenders: {
    logFile: {
      type: "dateFile",
      filename: path.join(LOG_PATH, "main"),
      pattern: "yyyy-MM-dd.log",
      keepFileExt: true,
      alwaysIncludePattern: true,
      layout: {
        type: "pattern",
        pattern: "%m%n",
      },
    },
    out: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["out"],
      level: "all",
    },
    main: {
      appenders: ["out", "logFile"],
      level: "DEBUG",
    },
  },
  pm2: true,
  pm2InstanceVar: "NODE_APP_INSTANCE", 
});


export const upload: string = process.cwd() + "/uploads"; // 图片存储位置
export const logger = log4js; // 打印


// 密钥
export const secretKey = "ACDDMDBHDVDD"; // token 密钥
export const secretHeader = "QaTBwXeeVrtGttSAA "; // token 头密钥
export const sessionKey = "VDHBDHVYWBXJS"; // session 密钥


 // 不校验token路由
export const noVerifyRouter = [
  "/api/login", 
  "api/registration"
];
