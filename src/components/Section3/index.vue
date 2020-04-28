<template>
  <div>
<router-link class="my-indent" :to="{ name: 'sort'}">          
   <div class="sale">
    <span style="font-size:0.4rem">限时秒杀！</span>
    <van-count-down :time="time"  style="display:inline" />
   </div>
       <div class="section2-list">
      <ul>
        <li v-for="(k,index) in list" :key="index">
          <router-link :to="{name:'详情页'}">
         <van-icon size="30px" name="like"/>
          </router-link>
          <h2 class="section2-list-title ac">
            {{k.title}}
          </h2>
          <p class="section2-list-intro">
            {{k.intro}}
          </p>
          <p class="section2-list-price">
            ￥{{k.price}}
          </p>
        </li>
      </ul>
    </div>
</router-link>
  </div>
</template>
<script>
export default {
    data() {
    return {
      time: 30 * 60 * 60 * 1000,
      list:[
        {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
           {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
           {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
           {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
         {
          title:'牛奶',
          intro:'促销',
          price:'50'
        },
      ]
    };
  },
}
</script>
<style lang="less">
.sale{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color: rgb(173, 4, 4);
}
.section2-list {
  overflow-x: auto;
  width: 100%;
  // .pt();
  /*原生滑动*/
  -webkit-overflow-scrolling: touch;
  > ul {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.2rem;
    width: 240%;
    li {
      margin-right: 1rem;
      width: 1.5rem;
      a,
      img {
        display: block;
        width: 100%;
      }

      h2,
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h2 {
        // .fz(font-size, 32);
        padding-top: 0.1rem;
        color: #333;
      }

      p.section2-list-intro {
        padding-top: 0.1rem;
        // .fz(font-size, 26);
        color: rgb(150, 150, 150);
      }

      p.section2-list-price {
        color: #b4282d;
      }
    }
  }
}
  
</style>