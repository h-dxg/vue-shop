// 引入mockjs

const Mock = require('mockjs');

let List = []
const login = function (config) {
  const { username, password } = JSON.parse(config.body)
  console.log(username, 'username')
  if (List.length > 0) {
    for (let i = 0; i < List.length; i++) {
      if (List[i].username === username) {
        return {
          code: 250,
          data: {
            message: '账号已经存在，请重试注册'
          }
        }
      }
      break;
    }
  } else {
    List.push({
      id: Mock.Random.guid(),
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

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', login);