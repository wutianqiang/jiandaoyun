const Router = require("koa-router");
import * as jiandaoyun from './jiandaoyun'


const dingdingrouter = new Router({
    prefix: "/dingding"
  });
  
const jiandaoyunrouter = new Router({
    prefix: "/jiandaoyun"
  });
  
dingdingrouter.get("/", function(ctx, next) {
    ctx.body = "dingding hahahah";
  });
  
jiandaoyunrouter.post("/", jiandaoyun.insertOrUpdateData);

export {dingdingrouter,jiandaoyunrouter}