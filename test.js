let axios = require('axios')

/**
axios.post('http://192.168.1.117:3000/jiandaoyun', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

let data = {
    "op": "data_create",
    "data": {
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
  }

console.log(data.data._id)

  
axios.post('http://ding.wiseunis.com:3001/jiandaoyun',data).then(function(result){
    console.log(result.data)
}).catch(function(err){
    console.log(err)
})
