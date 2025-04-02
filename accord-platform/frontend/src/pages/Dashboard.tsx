import React, { useEffect, useState } from 'react';
import { ServerList } from '../components/ServerList';
import { AlertForm } from '../components/AlertForm';
import { NotificationSettings } from '../components/NotificationSettings';

const Dashboard: React.FC = () => {
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServers = async () => {
            try {
                const response = await fetch('/api/servers'); // Adjust the API endpoint as needed
                const data = await response.json();
                setServers(data);
            } catch (error) {
                console.error('Error fetching servers:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Your Servers</h2>
            <ServerList servers={servers} />
            <h2>Create/Edit Alerts</h2>
            <AlertForm />
            <h2>Notification Settings</h2>
            <NotificationSettings />
        </div>
    );
};

export default Dashboard;