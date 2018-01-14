
import {MongoClient} from 'mongodb'

const url = 'mongodb://127.0.02.1:27017/jiandaoyun';


async function insertOrUpdateData(ctx,next) {
    let body = ctx.request.body
    console.log(body)
     //获取数据库连接
     let db = await MongoClient.connect(url)
     
     let collectionName = body.data.formName
     let his = 'his'+collectionName
     //获取数据集
     let collection = db.collection(collectionName);
     let hiscollection = db.collection(his)
     
     await hiscollection.insert(body)

     let fnd={'_id':body.data._id}
     //插入数据库
      await collection.findOneAndDelete(fnd)
      await collection.insert(body.data)

      await db.close()
    ctx.body='insertData Ok'
}

export  {insertOrUpdateData}

/*
{
    "formName": "人力部相关证书信息表",
    "_id": "5a3765a091646d77aef8e054",
    "creator": {
      "_id": "5a3765a091646d77aef8e057",
      "name": "余超"
    },
    "updater": {
      "_id": "5a3765a091646d77aef8e058",
      "name": "张静"
    },
    "deleter": {
      "_id": "5a3765a091646d77aef8e059",
      "name": "龙明"
    },
    "createTime": "2017-12-18T06:40:08.544Z",
    "updateTime": "2017-12-18T03:58:38.414Z",
    "deleteTime": "2017-12-18T20:49:22.113Z",
    "_widget_1511937891154": "养三权厂去",
    "_widget_1510715221629": "每记广",
    "_widget_1511937830425": -406,
    "_widget_1513223399532": "2017-12-18T19:59:19.277Z"
}
*/
