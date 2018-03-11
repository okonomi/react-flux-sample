import React, { Component } from 'react'
import { Container } from 'flux/utils'
import CountStore from './../stores/CountStore'
import CountActionCreators from '../actions/CountActionCreators';

class App extends Component {
  static getStores() {
    return [
      CountStore,
    ]
  }

  static calculateState() {
    return {
      count: CountStore.getState(),

      onAdd: CountActionCreators.addCount,
      onSub: CountActionCreators.subCount,
    }
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <p>{this.state.count}</p>
        <button
          onClick={this.state.onAdd}
        >
          UP
        </button>
        <button
          onClick={this.state.onSub}
        >
          DOWN
        </button>
      </div>
    )
  }
}

export default Container.create(App)
