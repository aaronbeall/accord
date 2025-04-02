import React, { useEffect, useState } from 'react';
import { ServerList } from '../components/ServerList';
import { NotificationSettings } from '../components/NotificationSettings';

const HomePage: React.FC = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        const fetchServers = async () => {
            try {
                const response = await fetch('/api/servers'); // Adjust the API endpoint as needed
                const data = await response.json();
                setServers(data);
            } catch (error) {
                console.error('Error fetching servers:', error);
            }
        };

        fetchServers();
    }, []);

    return (
        <div>
            <h1>Welcome to Accord</h1>
            <h2>Your Discord Servers</h2>
            <ServerList servers={servers} />
            <NotificationSettings />
        </div>
    );
};

export default HomePage;