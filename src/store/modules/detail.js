/**
 * @author wangmengjie
 * @date 2020/4/22 11.59
 * @Desc 分类菜单index
 */
import { setLocal, getLocal } from '@/util/util'

const detail = {
  state: {
    dog: [
      {
        dog: '哈士奇'
      },
      {
        dog: '柴犬'
      },
      {
        dog: '拉布拉多'
      },
    ],
    size: [
      {
        i: '大狗'
      },
      {
        i: '中狗狗'
      },
      {
        i: '小狗狗'
      }
    ],
    colSelected: 0,   //0是index,表示第一个
    sizeSelected: 0,  //0是index,表示第一个
    count: '',    //购物车里的商品数量
    carList: '',      //购物车的商品列表,
    selectedList: '',         //已选择的购物车商品列表
    unSelectedList: '',      //未选择的购物车商品列表,提交订单后用它替换carList
    allist: '' //全选时列表

  },

  mutations: {
    CHANGE_COL_SELECTED: (state, id) => {
      state.colSelected = id
    },
    CHANGE_SIZE_SELECTED: (state, id) => {
      state.sizeSelected = id
    },
    ADD_PRODUCT: (state) => {
      state.carList = getLocal('carList');
    },
    //获取当前购物车商品数量
    CHANGE_COUNT: (state) => {
      state.count = getLocal('count')
    },
    // 重置购物车
    RESET_CARLIST: (state) => {
      state.carList = getLocal('carList')
    },
    // 购物车里打钩的商品
    ['SET_SELECTEDLIST'] (state) {
      state.selectedList = getLocal('selectedList')

    },
    //购物车里没打钩的商品
    ['SET_UNSELECTEDLIST'] (state) {
      state.unSelectedList = getLocal('unSelectedList')
    },
    // 重置购物车数量
    RESET_COUNT: (state) => {
      state.count = getLocal('carList').length
    },
    // 全选数量
    SET_ALL: (state) => {
      state.allist = getLocal('allList')
    },
  },

  actions: {
    //网购物车列表添加数据
    addCarList ({ commit }, res) {
      setLocal(res, 'carList', true);
      commit('ADD_PRODUCT')
    },

    // 购物车数量增减,true是加,false是减
    setLocalCount ({ commit }, bool = true) {
      let count = getLocal('count') || 0;
      if (bool) {
        setLocal(++count, 'count');
      } else {
        setLocal(--count, 'count');
      }
      commit('CHANGE_COUNT');
    },
    // 删除购物车列表的某一项 （用新的数组直接替换）
    cutCarList ({ commit }, res) {
      setLocal(res, 'carList');
      commit('RESET_CARLIST');
    },
    // 分别保存打钩的商品和为打钩的商品
    setSelectedList ({ commit, getters }) {
      setLocal(getters.selectedList, 'selectedList');
      commit('SET_SELECTEDLIST');
      setLocal(getters.unSelectedList, 'unSelectedList');
      commit('SET_UNSELECTEDLIST');
    },
    //重新设置购物车商品列表,把打钩并提交的商品去掉,即保留unSelectedList

    resetCarList ({ commit }) {
      const unSelectedList = getLocal('unSelectedList');
      console.log('unSelectedList', unSelectedList);

      setLocal(unSelectedList, 'carList');
      commit('RESET_CARLIST')
    },
    // 全选时候 重置商品
    resetAll ({ commit }) {
      const unSelectedList = [];
      setLocal(unSelectedList, 'carList');
      commit('RESET_CARLIST')
    },
    // 重置购物车数量Count,即没打钩的商品的数量
    resetCount ({ commit }) {
      const count = getLocal('unSelectedList').length;
      setLocal(count, 'count');
      commit('RESET_COUNT');
    },
    // 全选时候 重置商品购物车的数量
    resetCountAll ({ commit }) {
      const count = [];
      setLocal(count, 'count');
      commit('RESET_COUNT');
    },
    // 全选的数据
    setALL ({ commit }, res) {
      setLocal(res, 'allList');
      commit('SET_ALL');
    }

  },

  getters: {
    selectedList (state) {
      // choseBool为真的商品 即打钩的商品
      if (state.carList !== null) {
        let arr = state.carList.filter((ele) => {
          return ele.choseBool == true
        });
        return arr
      }
    },

    unSelectedList (state) {
      if (state.carList !== null) {
        let arr = state.carList.filter((ele) => {
          return ele.choseBool == false
        });
        return arr
      }
    }

  }
}


export default detail