import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
class AddTodo extends Component {
  state = {  }
  onSubmit = (ev) => {
    ev.preventDefault();
    const input = this.input;
    if( !input.value.trim() ){
      return;
    }
    this.props.onAdd(input.value);
    input.value = ''
  }
  render() {
    return (     
        <form onSubmit = {this.onSubmit}>
          <div className="input-group">
            <input ref = {node  => this.input = node}
                  onKeyDown = {this.handleKeyDown} 
                  autoFocus = "true" 
                  type="text" 
                  className="form-control" />
            <span onClick ={this.onSubmit} className="input-group-addon">添加</span>
          </div>
        </form>  
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {onAdd:(text) => dispatch(actions.addTodo(text))};
}
export default connect(null,mapDispatchToProps)(AddTodo)