import React from 'react';
import './index.css';

function Card(props) {
    return (
    <div className="card-container" data-testid={`card-container-${props.data.id}`}>
        <span className="user-name" data-testid="user-name">{props.data.name}</span>
        <br />
        <span className="user-username" datae2e="user-username">{props.username}</span>
        <br />
        <span className="user-email" datae2e="user-email">{props.email}</span>
        <br />
        <span className="user-address-street" datae2e="user-address-street">{props.data.address.street}</span>
        <br />
        <span className="user-address-suite" datae2e="user-address-suite">{props.data.address.suite}</span>
        <br />
        <span className="user-address-city" datae2e="user-address-city">{props.data.address.city}</span> <span className="user-address-zipcode" datae2e="user-address-zipcode">{props.data.address.zipcode}</span>
        <br />
        <span className="user-address-phone" datae2e="user-address-phone">{props.phone}</span>
        <br />
        <span className="user-website" datae2e="user-website">{props.website}</span>
    </div>
    )
}

export default Card;