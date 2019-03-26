import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './mainPage';
import SideBar from './sideBar';
import MainPageNotes from './mainPageNotes';
import './App.css';

export default class App extends Component {
  state = {
    store: this.props.store,
  }

  render() {
    return (
      <div className="App">
        <main>
          <MainPage>
            <Route path='/' component={MainPage} />
          </MainPage>
          
          <SideBar folders = {this.state.store.folders}>
            <Route path='/sidebar' component={SideBar} />
          </SideBar>

          <MainPageNotes notes = {this.state.store.notes}></MainPageNotes>
        </main>
      </div>
    );
  }
}
