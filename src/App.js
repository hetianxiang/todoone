import React, { Component } from 'react';
import {view as Todos} from './todos/index'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:20}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <Todos />
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
