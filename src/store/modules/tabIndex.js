/**
 * @author wangmengjie
 * @date 2020/4/22 11.59
 * @Desc 分类菜单index
 */

const tabIndex = {
  state: {
    index: '0'
  },

  mutations: {
    CHANGE_TABINDEX: (state, id) => {
      state.index = id
    }
  },

  actions: {
  }
}

export default tabIndex
