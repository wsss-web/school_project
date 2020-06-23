const Router = require('koa-router')
const router = new Router()
const mysql = require('mysql')
const e_mail = require('./maiier.js')

// 测试路由
// router.get('/huawei', (ctx,next) => {
// 	ctx.body = '我是华为界面'
// });
// 数据库设置
var settings = {
  host: '192.168.43.196',
  user: 'root',
  password: '123',
  database: 'school'
}
var connection = mysql.createConnection(settings)
// 建立数据库连接
connection.connect()
const query = function (sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, function (error, results) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}
// 登录路由
router.get('/login', async (ctx, next) => {
  console.log('有人来了。。。。')
  var username = ctx.request.query.username
  var password = ctx.request.query.password
  var data = {
    username,
    password
  }
  var sql = "select * from user where user_name = '" + data.username + "' and pass_word = '" + password + "'"
  const results = await query(sql)
  console.log(results)
  var login = {
    status: '',
    msg: ''
  }
  if (results == '') {
    login.status = 0
    users.push(results[0].user_name)
    login.msg = '登录成功'
    ctx.body = login
  } else if (results[0].user_id != '') {
    login.status = 1
    login.msg = '登录失败'
    ctx.body = login
  }
})
// 注册路由
router.get('/apply', async (ctx, body) => {
  var status = ''
  var username = ctx.request.query.username
  var password = ctx.request.query.password
  var address = ctx.request.query.address
  console.log('有人来了。。。。。')
  var data = {
    username,
    password,
    address
  }
  console.log(data)
  var sql = "insert into user(user_name,pass_word,address) values('" + data.username + "','" + data.password +
    "','" + data.address + "')"
  const results = await query(sql)
  console.log(results)
  ctx.body = data
})
// 一个生成随机数的函数
var aaa = function () {
  var Num = ''
  for (var i = 0; i < 6; i++) {
    Num += Math.floor(Math.random() * 10)
  }
  return Num
}
// 验证码路由
router.get('/identify', async (ctx, body) => {
  var email = ctx.request.query.address // 刚刚从前台传过来的邮箱
  // var code = await tools.createSixNum(); //这里是我写的生成的随机六位数，等等下面给代码
  var date = new Date() // 获取当前时间
  var isLive = 'no'
  var code = await aaa()
  // 一个生成随机数的函数
  // 去数据库中找有没有同名的用户名，这里就要自己写了，不同的数据库查询方法不同
  var sql = "select * from user where address='" + email + "'"
  const results = await query(sql)
  var ok_email = results[0].address
  ctx.body = code
  var mail = {
    // 发件人
    from: '<1121842729@qq.com>',
    // 主题
    subject: '接受凭证', // 邮箱主题
    // 收件人
    to: email, // 前台传过来的邮箱
    // 邮件内容，HTML格式
    text: '用' + code + '作为你的验证码' // 发送验证码
  }
  await e_mail(mail) // 发送邮件
})
module.exports = router