import AppDispatcher from './../dispatchers/AppDispatcher'

const CountActionCreators = {
  addCount() {
    AppDispatcher.dispatch({
      type: 'ACTION_TYPE_COUNT_ADD',
    })
  }
}

export default CountActionCreators
