import React, { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  const [token, setToken] = useCustomHook(localStorage.getItem("token"));

  return (
    <div className="App">
      <AppRouter />
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
