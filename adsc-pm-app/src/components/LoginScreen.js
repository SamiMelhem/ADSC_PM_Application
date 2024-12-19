import React from 'react';

const LoginScreen = () => {
    const handleGoogleLogin = () => {
        // Redirect to backend login endpoint for OAuth2
        window.location.href = 'http://your-backend-url/auth/google';
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login</h1>
            <p>Please log in using your Google account to access the ADSC PM Hub.</p>
            <button onClick={handleGoogleLogin} style={styles.button}>
                Login with Google
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
        backgroundColor: '#DB4437', // Google Red
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default LoginScreen;
