// 引入mockjs

const Mock = require('mockjs');

const lunbo = function () {
  let pic = [
    {
      src: 'https://photo.16pic.com/00/49/50/16pic_4950902_b.jpg'
    },
    {
      src: 'https://photo.16pic.com/00/50/59/16pic_5059007_b.jpg'
    },
    {
      src: 'https://photo.16pic.com/00/85/49/16pic_8549952_b.jpg'
    }
  ]
  return pic

}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/swipe/index', 'get', lunbo);