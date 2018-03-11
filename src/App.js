import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        status: 'TODO',
        content: 'あいうえお',
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" checked={todo.status === 'DONE'} />
              {todo.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
