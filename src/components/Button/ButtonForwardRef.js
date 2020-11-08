import React from 'react';

function ButtonForwardRef(props, ref) {
    const styles = {
        border: 0,
        padding: '10px 20px',
        color: '#000000',
        backgroundColor: '#0071fd'
    }

    return <button style={styles} ref={ref} onMouseOver={props.handleChange}>App controlled button</button>;
}

export default React.forwardRef(ButtonForwardRef);