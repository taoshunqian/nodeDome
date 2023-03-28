const mongoose = require('mongoose');

//得到对应特定集合的model （文档：数据对象， 集合：数据表）
const Schema = mongoose.Schema;
const userSchema = new Schema({ //文档结构: 属性名\属性值
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    password: {type:String,select: false} //select: false 表示当返回对象时，不包含该属性
});

export const UserModel = mongoose.model('user', userSchema);//创建了users集合