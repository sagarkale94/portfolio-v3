import React from 'react';
import './title.css';

const Title = (props) => {
    return (
        <div className="title-container">
            <h1>{props.splitedTitlePart1}<span>{props.splitedTitlePart2}</span></h1>
            <span className="title-bg">{props.bgTitle}</span>
        </div>
    );
}

export default Title;