<template>
  <div>
      <router-link class="my-indent" :to="{ name: 'sort'}">
             <van-grid :column-num="4">
                <van-grid-item v-for="(i,index) in data" :key="index" icon="gift" :text="i.name" />
             </van-grid>
       </router-link>
  
  </div>
</template>
<script>
export default {
  data(){
    return{
       data:[
         {
           name:'1号产品'
         },
           {
           name:'2号产品'
         },
           {
           name:'3号产品'
         },
           {
           name:'4号产品'
         },
           {
           name:'5号产品'
         },
           {
           name:'6号产品'
         },
           {
           name:'7号产品'
         },
           {
           name:'8号产品'
         },
       ]
    }
  }

}
</script>