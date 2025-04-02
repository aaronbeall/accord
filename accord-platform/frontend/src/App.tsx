import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import Login from './components/Login';
import NotificationSettings from './components/NotificationSettings';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/alerts" component={AlertsPage} />
                <Route path="/login" component={Login} />
                <Route path="/settings" component={NotificationSettings} />
            </Switch>
        </Router>
    );
};

export default App;