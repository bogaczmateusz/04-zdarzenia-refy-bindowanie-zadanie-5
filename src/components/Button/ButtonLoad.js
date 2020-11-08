import React, { useEffect, useRef } from 'react';

function ButtonLoad() {
    const styles = {
        border: 0,
        padding: '10px 20px',
        color: '#000000',
        backgroundColor: '#0071fd'
    }
    const button = useRef();

    useEffect(() => {
        button.current.style.color = "#ffffff";
        button.current.style.backgroundColor = "#f00000";
    }, []);

    return <button style={styles} ref={button}>On load change</button>;
}

export default ButtonLoad;
