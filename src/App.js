import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Moviepage from './components/moviepage/moviepage';
import ByGenrePage from './components/bygenre'

class App extends Component {
  render() {
    return (
     <HashRouter>
       <Switch>
       <Route to='/' exact component={ Home }></Route>
       <Route to='/movies' exact component={ Moviepage }></Route>
       <Route to='/byGenre' exact componet={ ByGenrePage }></Route>
       </Switch>
       <Navbar/>
     </HashRouter>
    );
  }
}

export default App;
