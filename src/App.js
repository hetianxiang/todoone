import React, { Component } from 'react';
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [{ 
        id: Date().now,
        title: 'jintianxuexi',
        completed: false
      }]
    }
  }
  addTodo = (todo) => {
    todo = Object.assign(todo,{id:Date.now(),completed:false})
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos});
  }
  render() {
    let main = (
      <ul className="list-group">
        {this.state.todos.map((item, index) => <TodoItem key={index} todo ={item}/> )}
      </ul>
    )
    return (
      <div className="container" style={{marginTop:20}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader addTodo = {this.addTodo}/>    
              </div>
              <div className="panel-body">
                {main}
              </div>
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
