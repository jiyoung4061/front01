import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={PostListPage} path="/" exact />
        <Route component={LoginPage} path="/login" />
        <button>button</button>
      </div>
    );
  }
}

export default App;