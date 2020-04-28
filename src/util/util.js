const STORAGE_USER_KEY = 'STORAGE_USER_KEY'
// 存储浏览器
export function setLocal (res, key = STORAGE_USER_KEY, isSaveOldData = false) {
  //第三个参数是true的话,会增加数据而不是重新设置,res必须是数组
  if (isSaveOldData) {
    if (getLocal(key)) {
      // let oldData = getLocal(key);
      let oldData = [];

      return window.localStorage.setItem(key, JSON.stringify(oldData.concat(res)))
    }
  }

  return window.localStorage.setItem(key, JSON.stringify(res));

}
export function getLocal (key = STORAGE_USER_KEY) {
  return JSON.parse(window.localStorage.getItem(key))

}
