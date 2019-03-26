import React from 'react';
import { Link } from 'react-router-dom';


export default class Notes extends React.Component {
    render(){
        const notes = this.props.notes.map((item, index) => {
            return (
                <li><Link to={`/notes/:${item.id}`} >{item.name}
                    {item.modified}</Link>
                </li>
            )
        })
        return(
            <div>
                <ul>
                    {notes}
                </ul>
            </div>
        )
    }
}
