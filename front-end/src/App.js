import React, { useState, useContext } from 'react';
import './App.css';
import { Cliente } from './components/Cliente/Cliente';
import { Login } from './components/Login/Login';
import { Profissional } from './components/Profissional/Profissional';
import { AppContext } from './context';

function App() {

  const { logged, userType } = useContext(AppContext);

  return (
    <>
      {
        logged ?
          userType === 'clientes' ?
            <Cliente /> : <Profissional />
          :
            <Login />
      }
    </>
  );
}

export default App;
