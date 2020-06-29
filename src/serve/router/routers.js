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
  host: '192.168.2.108',
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
  if (results.length == 0) {
    login.status = 0
    login.msg = '登录失败'
    ctx.body = login
  } else {
    login.status = 1
    login.msg = '登录成功'
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
  console.log(results.error)
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
  // 一个随机六位数
  var cur_code = await aaa()
  // 去数据库中找有没有该邮箱
  var status = ''
  var code = ''
  var to_mail = ''
  var data = {
    status,
    code,
    to_mail
  }
  var sql = "select * from user where address='" + email + "'"
  const results = await query(sql)
  if (results.length == 0) {
    data.status = 0
  } else {
    data.status = 1
    data.code = cur_code
    data.to_mail = mail
  }
  ctx.body = data
  var mail = {
    // 发件人
    from: '<1121842729@qq.com>',
    // 主题
    subject: '接受凭证', // 邮箱主题
    // 收件人
    to: email, // 前台传过来的邮箱
    // 邮件内容，HTML格式
    text: '用' + cur_code + '作为你的验证码' // 发送验证码
  }
  await e_mail(mail) // 发送邮件
})

// 修改密码路由
router.get('/newword', async (ctx, body) => {
  var new_word = ctx.request.query.newword
  var address = ctx.request.query.address
  var sql = "update user set pass_word='" + new_word + "'where address='" + address + "'"
  var status = ''
  var data = {
    status
  }
  const results = await query(sql)
  console.log(results)
  if (results) {
    data.status = 1
  }
  ctx.body = data
})

// 新闻信息路由
router.get('/newsinfo', async (ctx, body) => {
  var sql = 'select * from news'
  const results = await query(sql)
  ctx.body = results
  // console.log(results)
})

// 单个新闻路由
router.get('/newmore', async (ctx, body) => {
  var new_id = ctx.request.query.new_id
  var sql = "select * from news where new_id = '" + new_id + "'"
  const results = await query(sql)
  ctx.body = results
})
// 用户信息路由（显示）
router.get('/userinfo', async (ctx, body) => {
  var username = ctx.request.query.username
  var sql = "select * from user_info where username='" + username + "'"
  const results = await query(sql)
  console.log(results)
  ctx.body = results[0]
})

// 用户宿舍信息展示路由
router.get('/domitoryshow', async (ctx, body) => {
  var username = ctx.request.query.username
  console.log(username)
  var sql = "select * from stu_domitory where username='" + username + "'"
  const results = await query(sql)
  console.log(results[0])
  ctx.body = results[0]
})

// 用户身份信息修改路由(管理系统)
router.get('/resetuserinfo', async(ctx,body) => {
  var one_per = ctx.request.query
  console.log(one_per)
  // 增加客户信息
  if(one_per.status == 1){
    console.log('6666')
    var sql_add = "insert into user_info(stu_id,name,username,phone,nickname,sex,address,sch_id,major_id,classname,grade,education,home_address,plan) values('"+ one_per.stu_id +"','"+ one_per.name +"','"+ one_per.username +"','"+ one_per.phone +"','"+ one_per.nickname +"','"+ one_per.sex +"','"+ one_per.address +"','"+ one_per.sch_id +"','"+ one_per.major_id +"','"+ one_per.classname +"','"+ one_per.grade +"','"+ one_per.education +"','"+ one_per.home_address +"','"+ one_per.plan +"')"
    var results_add = await query(sql_add)
    console.log('插入成功')
  }
  // 删除客户信息
  if(one_per.status == 2){
    var one_per = ctx.request.query
    var sql_del = "delete from user_info where username='"+ one_per.username +"'"
    var results_del = await query(sql_del)
    console.log('删除成功')
  }
  // 修改客户信息
  if(one_per.status == 3){
    var one_per = ctx.request.query
    var sql_reset = "update user_info set name='"+ one_per.name +"',phone='"+ one_per.phone +"',nickname='"+ one_per.nickname +"',sex='"+ one_per.sex +"',address='"+ one_per.address +"',sch_id='"+ one_per.sch_id +"',major_id='"+ one_per.major_id +"',classname='"+ one_per.classname +"',grade='"+ one_per.grade +"',education='"+ one_per.education +"',home_address='"+ one_per.home_address +"',plan='"+ one_per.plan +"'where username='"+ one_per.username +"'"
    var results_reset = await query(sql_reset)
    console.log('修改成功')
  }
})

// 用户宿舍信息修改路由（管理系统）
router.get('/resetdomitoryinfo', async(ctx,body) =>{
  var one_dom = ctx.request.query
  // 增加住宿信息
  if(one_dom.status == 1){
    var sql_add = "insert into stu_domitory() values('"+ one_dom.stu_id +"','"+ one_dom.buliding_id +"','"+ one_dom.floor +"','"+ one_dom.room +"','"+ one_dom.specifications +"','"+ one_dom.washroom +"','"+ one_dom.balcony +"','"+ one_dom.username +"','"+ one_dom.money +"','"+ one_dom.moniter +"')"
    var results_add = await query(sql_add)
    console.log('插入成功')
  }
  // 删除住宿信息
  if(one_dom.status == 2){
    var sql_del = "delete from stu_domitory where username='"+ one_dom.username +"'"
    var results_del = await query(sql_del)
    console.log('删除成功')
  }
  // 修改住宿信息
  if(one_dom.status == 3){
    var sql_reset = "update stu_domitory set buliding_id='"+ one_dom.buliding_id +"',floor='"+ one_dom.floor +"',room='"+ one_dom.room +"',specifications='"+ one_dom.specifications +"',washroom='"+ one_dom.washroom +"',balcony='"+ one_dom.balcony +"',money='"+ one_dom.money +"',moniter='"+ one_dom.moniter +"'where username = '"+ one_dom.username +"'"
    var results_reset = await query(sql_reset)
    console.log('修改成功')
  }
})

module.exports = router
