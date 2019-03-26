import React from 'react';
import STORE from './store'

export default class Folder extends React.Component{
    render(){
        const folders = this.props.folders

        return(
            <div className="folder-side-bar">
                <p>{this.props.folderName}</p>
            </div>
        )
    }
}