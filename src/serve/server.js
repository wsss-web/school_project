const Koa = require('koa2')
const app = new Koa()
const router = require('./router/routers')
const statics = require('koa-static');
var cors = require('koa-cors')
var bodyParser = require('koa-bodyparser')

// 文件解析
app.use(bodyParser());
// 加载静态资源
app.use(cors());
app.use(statics(__dirname + '/static/images'));
// 配置路由
app.use(router.routes())
app.use(router.allowedMethods());
app.use(ctx => {
  ctx.body = 'Hello'
})

console.log('server is runing on 3000')
app.listen(3000)
