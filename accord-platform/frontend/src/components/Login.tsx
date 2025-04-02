import React from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const history = useHistory();

    const handleLogin = async (provider: string) => {
        // Implement social login logic here
        // Redirect to dashboard after successful login
        history.push('/dashboard');
    };

    return (
        <div className="login-container">
            <h1>Login to Accord</h1>
            <button onClick={() => handleLogin('google')}>Login with Google</button>
            <button onClick={() => handleLogin('discord')}>Login with Discord</button>
            <button onClick={() => handleLogin('github')}>Login with GitHub</button>
        </div>
    );
};

export default Login;