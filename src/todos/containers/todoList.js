import React, { Component } from 'react';
import TodoItem from './todoItem'
import {connect} from 'react-redux';

class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <ul className = "list-group">
       {
          this.props.todos.map((todo,index) => 
           <TodoItem key ={index} todo = {todo}/>
          )
        } 
      </ul>
    );
  }
}

export default connect(state => state)(TodoList);