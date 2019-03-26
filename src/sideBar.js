import React from 'react';
import Folder from './Folder'
import { Route } from 'react-router-dom';


export default class SideBar extends React.Component{
    render(){
        console.log(this.props.folders)
        const folders = this.props.folders.map((item, index) => {
            return (
                <Folder key={index}  folderName = {item.name}
                folderId= {item.id}></Folder>
            )
        })
        return(
            <div className="side-bar">
                {folders}
            </div>
        )
    }
}