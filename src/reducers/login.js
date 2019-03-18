const initState = {
  name: '王五'
};
let login = (state = initState, action) => {
  switch (action.type) {
    case 'loginStore':
      return { ...state, ...action.payload }
    default:
      return state
  }
};

export default login;