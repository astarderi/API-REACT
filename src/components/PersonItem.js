import './PersonItem.css';
import React from 'react';

function PersonItem(props) {
    return (
        <div className="person-item">
            <img src={props.image} alt={props.name} />
            <div className="person-item__details">
                <div className="person-item__title">{props.name}</div>
                <div className="person-item__date">
                    <strong>Birthday: </strong> {props.birthdayDate}
                </div>
            </div>
        </div>
    );
}
export default PersonItem;
