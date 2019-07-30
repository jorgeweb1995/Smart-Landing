import React from 'react';

const Services = (props) =>(
    <div class='service-item'>
        <img src={props.img} alt="service"/>
        <h3>{props.title}</h3>
    </div>
)

export default Services;