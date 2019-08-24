import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// import AppRouter from './components/AppRouter';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  const [token, setToken] = useCustomHook(localStorage.getItem("token"));

  return (
    <div className="App">

      <Route exact path='/' render={props => <Login {...props} setToken={setToken}/>} />
      <Route path='/register' render={props => <Register {...props} setToken={setToken} />} />

      {/* <AppRouter /> */}
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
