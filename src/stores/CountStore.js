import { ReduceStore } from 'flux/utils'
import AppDispatcher from '../dispatchers/AppDispatcher'

class CountStore extends ReduceStore {
  getInitialState() {
    return 0
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ACTION_TYPE_COUNT_ADD':
        return state + 1
      case 'ACTION_TYPE_COUNT_SUB':
        return state - 1
      default:
        return state
    }
  }
}

export default new CountStore(AppDispatcher)
