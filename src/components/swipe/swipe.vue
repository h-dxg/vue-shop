<template>
  <div class="swipe">
    <van-swipe
      class="my-swipe"
      :autoplay="2000"
      style="height: 300px;"
    >
      <van-swipe-item
        v-for="(i,index) in list"
        :key="index"
      ><img
          width="100%"
          height="300px"
          :src="i.src"
          alt=""
        ></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getPic } from '@/api/home'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getPic().then((res) => {
        this.list = res.data
      })
    }
  },
}
</script>
<style lang="less">
.swipe {
  overflow: hidden;
}
.my-swipe {
  overflow: hidden;
  img {
    margin-top: -2px;
  }
}
</style>