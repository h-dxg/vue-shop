// 引入mockjs

const Mock = require('mockjs');

// 获取 mock.Random 对象

// const Random = Mock.Random;

// mock一组数据

// const produceNewsData = function () {

//   let articles = [];

//   for (let i = 0; i < 100; i++) {

//     let newArticleObject = {

//       title: Random.csentence(5, 30), //  Random.csentence( min, max )

//       thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

//     }

//     articles.push(newArticleObject)

//   }

//   return {
//     articles: articles
//   }

// }
let List = []
const add = function (config) {
  const { username, password } = JSON.parse(config.body)
  console.log(List, 'List')
  if (List.length > 0) {
    for (let i = 0; i < List.length; i++) {
      if (List[i].username === username) {
        return {
          code: 250,
          data: {
            message: '账号已经存在，请重试注册'
          }
        }
      } else {
        List.push({
          password: password,
          username: username
        })
        return {
          code: 200,
          data: {
            message: '恭喜你注册成功，请返回去登录界面！'
          }
        }
      }
    }
  } else {
    List.push({
      password: password,
      username: username
    })
    return {
      code: 200,
      data: {
        message: '恭喜你注册成功，请返回去登录界面！'
      }
    }
  }
}
// id: Mock.Random.guid(),
// 登录
const login = function (config) {
  // const obj = JSON.parse(config.body)
  const { username, password } = JSON.parse(config.body)
  if (List.length > 0) {
    for (let i = 0; i < List.length; i++) {
      if (List[i].username === username && List[i].password === password) {
        return {
          code: 200,
          data: {
            token: Mock.Random.guid(),
            message: '登录成功！'
          }
        }
      } else {
        return {
          code: 201,
          data: {
            message: '账号或者密码错误！'
          }
        }
      }
    }
  } else {
    return {
      code: 201,
      data: {
        message: '账号或者密码错误！'
      }
    }
  }

  // 存在
  // if (List.indexOf(obj) !== -1) {
  //   return {
  //     code: 200,
  //     data: {
  //       data: Mock.Random.guid(),
  //       message: '登录成功！'
  //     }
  //   }
  // } else {
  //   return {
  //     code: 201,
  //     data: {
  //       message: '账号或者密码错误！'
  //     }
  //   }
  // }

}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/register/index', 'post', add);
Mock.mock('/login/index', 'post', login);
