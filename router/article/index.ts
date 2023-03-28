import { codeStatus } from "../../code";
import { isEmpty, delayAsync, isInt,isByteLength } from "../../validator";
import {
  classifyListMock,
  articleListMock,
  articleListMockType,
} from "../../mock";

let validator: any;

// 分类列表
export const classifyList = async (req: any, res: any) => {
  await delayAsync(1);
  var status = codeStatus(200);
  var { id } = req.query;

  validator = isEmpty(id, "id");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  status.body = classifyListMock;
  res.json(status);
};

// 编辑分类
export const editClassifyInfo = async(req: any, res: any) => {
  await delayAsync(1);
  var status = codeStatus(200, "修改成功");
  var { id , title} = req.body;
  // id
  validator = isInt(id, "id");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  validator = isEmpty(title, "分类名称");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  res.json(status);
}

// 获取文章列表 || 获取指定文章
export const articleList = async (req: any, res: any) => {
  await delayAsync(1);
  var status = codeStatus(200);
  var { id } = req.query;
  // 获取全部
  if (id == undefined) {
    const articleItems: articleListMockType[] = articleListMock;
    status.body = articleItems;
  } else {
    // 需要 id ，id传错
    validator = isInt(id, "id");
    if (!validator.validator) {
      status = codeStatus(400, validator.msg);
    } else {
      // 需要id ，id正确
      const articleItems: articleListMockType[] = [];
      articleListMock.forEach((item: any) => {
        if (item["id"] == id) {
          articleItems.push(item);
        }
      });
      status.body = articleItems;
    }
  }

  res.json(status);
};

// 修改文章
export const editArticleInfo = async (req: any, res: any) => {
  await delayAsync(1);
  var status = codeStatus(200, "修改成功");
  var { id , title, classify, context } = req.body;
  // id
  validator = isInt(id, "id");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  validator = isEmpty(title, "标题");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }
  

  validator = isInt(classify, "归属分类");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  validator = isByteLength(context, "文章内容", 1, 5);
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  validator = isEmpty(context, "文章内容");
  if (!validator.validator) {
    status = codeStatus(400, validator.msg);
  }

  res.json(status);
}



