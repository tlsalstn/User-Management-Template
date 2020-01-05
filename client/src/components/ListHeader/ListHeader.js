import React from 'react';
import './ListHeader.css';

class ListHeader extends React.Component {
    render() {
        const { width, textAlign } = this.props;
        
        return (
            <div className="listHeader" style={{width: width}}>
                {this.props.children.map(item => {
                    return (
                        <div className="title" style={{width: item.props.width, textAlign: textAlign}}>
                            {item.props.children}
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default ListHeader;