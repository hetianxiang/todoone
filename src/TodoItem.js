import React, { Component } from 'react';
class TodoItem extends Component {
  state = {  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-1">
              <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.toggle(this.props.todo.id)}/>
          </div>
          <div className="col-xs-10" style={{textDecoration:this.props.todo.completed?'line-through':''}}>
              {this.props.todo.title}
          </div>
          <div className="col-xs-1 ">
              <button className="btn btn-danger btn-xs" onClick={()=>this.props.remove(this.props.todo.id)}>X</button>
          </div>
        </div>
    </li>
    );
  }
}

export default TodoItem;