import React, { Component } from 'react';
const ENTER_KEY= 13;
class TodoHeader extends Component {

  
  handleKeyDown = (ev) => { 
    if(ev.keyCode === ENTER_KEY){
      let title = ev.target.value;
      this.props.addTodo({title});
      ev.target.value = "";
    }
  }
 
  handleClick = (ev) => {
    this.setState({title:ev.target.value})
  }
  render() {
    return (
        <div className="input-group">
          <input onKeyDown = {this.handleKeyDown}  autoFocus = "true" type="text" className="form-control" />
          <span onClick = {this.handleClick} className="input-group-addon">提交</span>
        </div>
    );
  }
}

export default TodoHeader;