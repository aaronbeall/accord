import React, { useEffect, useState } from 'react';
import AlertForm from '../components/AlertForm';
import ServerList from '../components/ServerList';

const AlertsPage = () => {
    const [servers, setServers] = useState([]);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Fetch the list of servers the user has joined
        const fetchServers = async () => {
            const response = await fetch('/api/servers');
            const data = await response.json();
            setServers(data);
        };

        // Fetch the user's alerts
        const fetchAlerts = async () => {
            const response = await fetch('/api/alerts');
            const data = await response.json();
            setAlerts(data);
        };

        fetchServers();
        fetchAlerts();
    }, []);

    const handleAlertChange = (newAlerts) => {
        setAlerts(newAlerts);
    };

    return (
        <div>
            <h1>Alerts Management</h1>
            <ServerList servers={servers} />
            <AlertForm alerts={alerts} onAlertChange={handleAlertChange} />
        </div>
    );
};

export default AlertsPage;