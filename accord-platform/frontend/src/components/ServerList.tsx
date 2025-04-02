import React, { useEffect, useState } from 'react';

const ServerList = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        const fetchServers = async () => {
            const response = await fetch('/api/servers');
            const data = await response.json();
            setServers(data);
        };

        fetchServers();
    }, []);

    return (
        <div>
            <h2>Your Discord Servers</h2>
            <ul>
                {servers.map(server => (
                    <li key={server.id}>
                        <h3>{server.name}</h3>
                        <p>ID: {server.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServerList;