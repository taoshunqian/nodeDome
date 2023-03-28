var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const session = require("express-session");
const app = express();

require("dotenv").config({ path: ".env" }); // 读取配置文件
var router = require("./router");
const { verifyToken } = require("./token");
import { removeProtemFiles } from "./script";
import { sessionKey } from './config';
import { codeStatus  } from './code';

  


const port = 5555;
app.use("/public", express.static(__dirname + "/public")); // 加载html

// ---------- 跨域 -----------------
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// ---------------------------------

// ----------------- session ---------------
app.use(session({
  secret: sessionKey,
	resave: true, 
  name: "jone_session_name",
	saveUninitialized: true,
  cookie: {maxAge: 1000 * 3600 * 24},
}));
// -----------------------------------------

// ----------------- api ---------------
app.use("/api",verifyToken, router);
// -------------------------------------

// ------------ 处理错误问题-----------------------
app.get("*", function (req: any, res: any) {
  res.status(404).sendFile(__dirname + "/public/" + "404.html");
});
app.post("*", function (req: any, res: any) {
  res.status(200).json(codeStatus( 500, "请求有误"));
});
// -----------------------------------------------

// -------------------------端口创建-------------------
app.listen(port, function () {
  console.log("http://localhost:" + port + "/");
});
// -----------------------------------------------
