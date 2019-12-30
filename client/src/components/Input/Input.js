import React from 'react';
import './Input.css';

class Input extends React.Component {
    render() {
        const { width, height, type, placeholder, onChange } = this.props;
        return (
            <input className="input" style={{"width": width, "height": height}} type={type} placeholder={placeholder} onChange={onChange} />
        );
    };
};

export default Input;