
// 默认值
const initialState = {
  pageTitle: '首页',
  flag: 1,
}

// 一个reducer就是一个函数
export default function index(state = initialState, action = {}) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return Object.assign({}, state, {
        pageTitle: '9988'
      })
    default:
      return state
  }
}
