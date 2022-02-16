import React from 'react';
import {BrowserRouter as Router,  Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './screen/LoginPage/Login';
import Register from './screen/RegisterPage/Register';
import Dashboard from './screen/Dashboard/Dashboard'
import AlertNotifications from './components/AlertNotifications';

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/">
                      <Redirect to="/dashboard" />
                  </Route>
              </Switch>
          </Router>
          <AlertNotifications/>
      </>
  );
}

export default App;
