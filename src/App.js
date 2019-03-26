import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './mainPage';


import './App.css';

export default class App extends Component {
  state = {
    store: this.props.store,
  }

  render() {
    return (
      <div className="App">
        <main>
          <MainPage notes = {this.state.store.notes} folders = {this.state.store.folders}>
            <Route path='/' component={MainPage} />
          </MainPage>
          


         
        </main>
      </div>
    );
  }
}
