import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // Navigate to the Login Screen
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to ADSC PM Hub</h1>
            <p>Your centralized platform for project management.</p>
            <button onClick={handleLogin} style={styles.button}>
                Login
            </button>
        </div>
    );
};

const styles = {
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default MainPage;
