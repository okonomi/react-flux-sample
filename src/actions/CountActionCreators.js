import AppDispatcher from './../dispatchers/AppDispatcher'

const CountActionCreators = {
  addCount() {
    AppDispatcher.dispatch({
      type: 'ACTION_TYPE_COUNT_ADD',
    })
  },
  subCount() {
    AppDispatcher.dispatch({
      type: 'ACTION_TYPE_COUNT_SUB',
    })
  },
  clearCount() {
    AppDispatcher.dispatch({
      type: 'ACTION_TYPE_COUNT_CLEAR',
    })
  }
}

export default CountActionCreators
