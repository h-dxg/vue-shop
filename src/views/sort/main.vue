<template>
  <div class="main">
 <p class="title">{{name}}</p>
   <ul>
      <li v-for="(i,index) in list" :key="index">
        <router-link :to="{name:'detail'}">
       <van-image width="100%" height="100%" :src="i.src" />
        </router-link>
      </li> 
  </ul>
  </div>
</template>
<script>
export default {
  props:{
  
  },
  data() {
    return {
      name:'',
      list:[]
    }
  },
  watch:{
    $route () {   
     this.name=this.$route.query.name
           switch (this.$route.query.name) {
        case '家用电器':
      this.list=[
       {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
     ]
          break;
        case '生活用品':
      this.list = [{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
           {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
              {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
           {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
              {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
           {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
              {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
           {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          }
      ]
          break;
        case '厨房家具':
          this.list = [
            {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            },
             {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            },
             {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            },
             {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            },
             {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            },
             {
              src:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022518602,2685313376&fm=115&gp=0.jpg'
            }
          ];
          break;
        case '数码产品':
      this.list=[
       {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
     ];
          break;
        case '宠物生活':
          this.list = [
            {
              src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
             {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
            {
              src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
             {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },
               {
             src:'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=2709907549,596188497&fm=85&s=9B02E20570224F1B5089B0C90300E091'
            },

          ];
          break;
        case '衣服鞋子':
          this.list = [
            {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
                {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
           {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
          {
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },{
            src:'http://img3.imgtn.bdimg.com/it/u=144540078,3209919363&fm=15&gp=0.jpg'
          },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
             {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
             {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            },
               {
              src:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3268575654,1430176211&fm=85&app=63&f=JPEG?w=121&h=75&s=69A2DC590EF186554871B90D0300E044'
            }
          ];
          break; 
      } 
  
    } 
  },
  created(){
   this.name=this.$route.query.name
    this.list=[
       {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
     ]
  }
}

</script>
<style lang="less" scoped>
.main{
    margin-left: 2.5rem;
  .title{
  color:rgb(29, 27, 27);
  font-weight: 500;
  font-size: 18px;
}
ul{
  width: 100%;
  height: 100%;
  
  li{
    float: left;
    margin: 0.22rem;
    // margin-left: 2.5rem;
    width: 26%;
  }
}

}


  
</style>