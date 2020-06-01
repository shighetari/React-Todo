import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { createPortal } from 'react-dom';

const samplelist = [{

  task: `Organize garage`,
  id: `1234`,
  completed: false
},
{
  task: `Bake Cookies`,
  id: ``,
  completed: false
}
];

class App extends React.Component {
  constructor() {
    super();
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    this.state = {
      samplelist: samplelist
    }
  }

  addTask = itemTask => {

    const newTask = {
      task: itemTask,
      id: new Date(),
      completed: false
    }
    this.setState({
      samplelist: [...this.state.samplelist, newTask]
    })
  }
  clearCompletedTask = () => {
    this.setState({
      samplelist: this.state.samplelist.filter(item => {
        return (
          item.completed === false

        )
      })
    })

  }
  toggleTask = taskID => {
    this.setState({
      samplelist: this.state.samplelist.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item;
        }
      })
    })
  }



  render() {
    return (
      <div>
        <h2 className="welcome-h2">Task List application</h2>

        <TodoForm
          addTask={this.addTask}
        />
        <TodoList
          toggleTask={this.toggleTask}
          samplelist={this.state.samplelist}
          clearCompletedTask={this.clearCompletedTask}
        />



      </div>
    );
  }
}

export default App;
