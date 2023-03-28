const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/my_test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const conn = mongoose.connection;
//绑定连接完成监听
conn.on('connected',function () {
    console.log('数据库连接成功');
});
conn.on('close',function () {
    console.log('数据库断开连接');
});

module.exports = conn;