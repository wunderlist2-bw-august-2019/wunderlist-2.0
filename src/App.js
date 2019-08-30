import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  const [token, setToken] = useCustomHook("token");
  const [userID, setUserID] = useCustomHook("user_id");
  const [welcomeMessage, setWelcomeMessage] = useCustomHook("welcomMessage");

  const logout = () => {
    setToken();
    setUserID();
    setWelcomeMessage();
  }

  return (
    <div className="App">
      {token ? <HomePage welcomeMessage={welcomeMessage} logout={logout} /> : 
        <div>
          <Route exact path='/' render={props => <Login {...props} setToken={setToken} setUserID={setUserID} setWelcomeMessage={setWelcomeMessage} />} />
          <Route path='/register' render={props => <Register {...props} setToken={setToken} setUserID={setUserID} setWelcomeMessage={setWelcomeMessage} />} />
        </div>
      }
    </div>
  );

  function useCustomHook(name) {
    const [storage, setStorage] = useState(localStorage.getItem(name));
  
    const placeInStorage = value => {
        if (!value) {
            localStorage.removeItem(name);
            setStorage();
        } else {
            localStorage.setItem(name, value);
            setStorage(value);
        }
    };

    return [storage, placeInStorage];
  }
}

export default App;
