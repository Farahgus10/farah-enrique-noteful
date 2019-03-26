import React from 'react';
import Header from './header'
import { Link } from 'react-router-dom';
import SideBar from './sideBar';

export default class MainPage extends React.Component{
    render(){
        return(
            <div className="main-page">
                < Header />
                <h1>Main Page</h1>
               
            </div>
        )
    }
}