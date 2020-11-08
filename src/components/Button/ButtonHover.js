import React, { useRef } from 'react';

function ButtonHover() {
    const styles = {
        border: 0,
        padding: '10px 20px',
        color: '#000000',
        backgroundColor: '#0071fd'
    }
    const button = useRef();

    const changeColor = () => {
        button.current.style.backgroundColor = "#f00000";
        button.current.style.color = "#ffffff";
    };

    return <button style={styles} ref={button} onMouseOver={changeColor}>On hover change</button>;
}

export default ButtonHover;
