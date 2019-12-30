import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        const { content, onClick } = this.props;
        return (
            <button className="button" onClick={onClick} >{content}</button>
        );
    };
};

export default Button;