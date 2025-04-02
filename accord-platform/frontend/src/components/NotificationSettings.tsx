import React, { useEffect, useState } from 'react';

const NotificationSettings = () => {
    const [servers, setServers] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [selectedServer, setSelectedServer] = useState(null);
    const [newAlert, setNewAlert] = useState({ sound: false, notification: false });

    useEffect(() => {
        // Fetch the list of servers the bot has been added to
        const fetchServers = async () => {
            const response = await fetch('/api/servers');
            const data = await response.json();
            setServers(data);
        };

        fetchServers();
    }, []);

    const handleServerChange = (event) => {
        const serverId = event.target.value;
        setSelectedServer(serverId);
        // Fetch alerts for the selected server
        const fetchAlerts = async () => {
            const response = await fetch(`/api/alerts/${serverId}`);
            const data = await response.json();
            setAlerts(data);
        };

        fetchAlerts();
    };

    const handleAlertChange = (event) => {
        const { name, value } = event.target;
        setNewAlert((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddAlert = async () => {
        await fetch(`/api/alerts/${selectedServer}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlert),
        });
        // Refresh alerts after adding
        handleServerChange({ target: { value: selectedServer } });
    };

    const handleRemoveAlert = async (alertId) => {
        await fetch(`/api/alerts/${selectedServer}/${alertId}`, {
            method: 'DELETE',
        });
        // Refresh alerts after removing
        handleServerChange({ target: { value: selectedServer } });
    };

    return (
        <div>
            <h2>Notification Settings</h2>
            <select onChange={handleServerChange}>
                <option value="">Select a server</option>
                {servers.map((server) => (
                    <option key={server.id} value={server.id}>
                        {server.name}
                    </option>
                ))}
            </select>

            {selectedServer && (
                <div>
                    <h3>Alerts for {selectedServer}</h3>
                    <ul>
                        {alerts.map((alert) => (
                            <li key={alert.id}>
                                {alert.name}
                                <button onClick={() => handleRemoveAlert(alert.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        name="name"
                        placeholder="Alert Name"
                        onChange={handleAlertChange}
                    />
                    <label>
                        Sound
                        <input
                            type="checkbox"
                            name="sound"
                            checked={newAlert.sound}
                            onChange={(e) => handleAlertChange({ target: { name: 'sound', value: e.target.checked } })}
                        />
                    </label>
                    <label>
                        Notification
                        <input
                            type="checkbox"
                            name="notification"
                            checked={newAlert.notification}
                            onChange={(e) => handleAlertChange({ target: { name: 'notification', value: e.target.checked } })}
                        />
                    </label>
                    <button onClick={handleAddAlert}>Add Alert</button>
                </div>
            )}
        </div>
    );
};

export default NotificationSettings;