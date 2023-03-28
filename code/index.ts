interface Code  {
    code: Number,
    msg: String,
    body?: {}
}

export const codeStatus = (code:number, msg?:string, context?:any):any => {
    let resData:Code = {
        "code": code ?? "200",
        "msg": msg ?? "获取成功",
        "body": context ?? {},
    }
    return resData;
}

