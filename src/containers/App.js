import React, { Component } from 'react'
import { Container } from 'flux/utils'

class App extends Component {
  state = {
    count: 0
  }

  handleClick = (event) => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button
          onClick={this.handleClick}
        >
          {this.state.count}
        </button>
      </div>
    )
  }
}

// export default Container.create(App)

export default App
