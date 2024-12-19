import React, { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        fetch('/')
            .then(response => response.text())
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            <h1>ADSC PM Application</h1>
        </div>
    );
};

export default App;
