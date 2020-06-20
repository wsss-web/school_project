const Koa = require('koa2');
const app = new Koa();
const router = require('./router/routers')
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser');

// 文件解析模块
app.use(bodyParser());
// 跨域模块
app.use(cors());
app
	.use(router.routes())
	.use(router.allowedMethods());
app.use(ctx => {
	ctx.body = 'Hello';
});

console.log('server is runing on 3000')
app.listen(3000);
