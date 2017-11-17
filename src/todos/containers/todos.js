import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList';
export default () => {
  return (
    <div>
    <div className="panel panel-heading">
      <AddTodo />
    </div>
    <div className="panel-body">
     <TodoList/>
    </div>
    </div>
  )
} 