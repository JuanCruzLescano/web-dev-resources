import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './sections/Home';
import Category from './sections/Category';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/category' component={Category} />
    </Switch>
    </>
  );
}

export default App;
