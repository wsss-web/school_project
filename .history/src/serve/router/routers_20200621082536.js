const Router = require('koa-router')
const router = new Router()
const mysql = require('mysql')

// 测试路由
// router.get('/huawei', (ctx,next) => {
// 	ctx.body = '我是华为界面'
// });
// 数据库设置
var settings = {
  host: 'localhost',
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
  var status = ''
  if (results === '') {
    status = 0
    ctx.body = '登录失败'
  } else if (results[0].user_id !== '') {
    status = 1
    ctx.body = status
  }
})

router.get('/news', async (ctx, next) => {
  var sql = 'select * from news'
  const results = await query(sql)
  console.log(results)
  ctx.body = results
})
module.exports = router
