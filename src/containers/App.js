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

      onClick: CountActionCreators.addCount,
    }
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button
          onClick={this.state.onClick}
        >
          {this.state.count}
        </button>
      </div>
    )
  }
}

export default Container.create(App)
