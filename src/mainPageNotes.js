import React from 'react';

export default class MainPageNotes extends React.Component {
    render(){
        const notes = this.props.notes.map((item, index) => {
            return (
                <li>{item.name}
                    {item.modified}
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
