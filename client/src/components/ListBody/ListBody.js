import React from 'react';
import './ListBody.css';

class ListBody extends React.Component {
    render() {
        const { width, textAlign } = this.props;
        return (
            <div className="listBody" style={{ width: width, textAlign: textAlign }}>
                {this.props.children.map(item => {
                    return (
                        <div className="content" style={{ width: item.props.width, textAlign: textAlign }}>
                            {item.props.children}
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default ListBody;