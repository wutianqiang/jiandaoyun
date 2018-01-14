const Koa = require("koa");

const bodyParser = require('koa-bodyparser');
import {jiandaoyunrouter,dingdingrouter} from './router'

const app = new Koa();
app.use(bodyParser());


app.use(dingdingrouter.routes()).use(dingdingrouter.allowedMethods());

app.use(jiandaoyunrouter.routes()).use(jiandaoyunrouter.allowedMethods());
// response

app.use(ctx => {
  ctx.body = "Hello World";
});

app.listen(3001);
console.log("Listen at 3001....");
