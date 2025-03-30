import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const file = (x) => {
        console.log(x);
    };

    return (
        <>
            <div>hello world</div>
        </>
    );
}

export default App;
