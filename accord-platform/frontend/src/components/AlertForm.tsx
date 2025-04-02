import React, { useState, useEffect } from 'react';

const AlertForm = ({ servers, onSubmit }) => {
    const [alertName, setAlertName] = useState('');
    const [selectedServer, setSelectedServer] = useState('');
    const [alertType, setAlertType] = useState('global');
    const [playSound, setPlaySound] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            alertName,
            selectedServer,
            alertType,
            playSound,
            showNotification,
        });
        resetForm();
    };

    const resetForm = () => {
        setAlertName('');
        setSelectedServer('');
        setAlertType('global');
        setPlaySound(false);
        setShowNotification(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Alert Name:</label>
                <input
                    type="text"
                    value={alertName}
                    onChange={(e) => setAlertName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Server:</label>
                <select
                    value={selectedServer}
                    onChange={(e) => setSelectedServer(e.target.value)}
                >
                    <option value="">Select a server</option>
                    {servers.map((server) => (
                        <option key={server.id} value={server.id}>
                            {server.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Alert Type:</label>
                <select
                    value={alertType}
                    onChange={(e) => setAlertType(e.target.value)}
                >
                    <option value="global">Global</option>
                    <option value="server">Server</option>
                    <option value="channel">Channel</option>
                </select>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={playSound}
                        onChange={() => setPlaySound(!playSound)}
                    />
                    Play Sound
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showNotification}
                        onChange={() => setShowNotification(!showNotification)}
                    />
                    Show Desktop Notification
                </label>
            </div>
            <button type="submit">Create Alert</button>
        </form>
    );
};

export default AlertForm;