import React, {useRef} from 'react';

import './index.css';
import { ButtonLoad, ButtonHover, ButtonForwardRef } from './components/Button';

function App() {
    const button = useRef();

    const handleChange = () => {
        button.current.style.backgroundColor = "#f00000";
        button.current.style.color = "#ffffff";
    }

    return (
        <div style={{textAlign: 'center', padding: 25}}>
            <ButtonLoad /><br/><br/>
            <ButtonHover /><br/><br/>
            <ButtonForwardRef handleChange={handleChange} ref={button} />
        </div>
    );
}

export default App;
