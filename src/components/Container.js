import React, {Component} from 'react';

class Container extends Component {

    render() {
        return (
            <div style={{width: '1400px', margin: '0 auto' }}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;
