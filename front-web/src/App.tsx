import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Toast } from 'react-toastify/dist/components';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer/>
    </>
  );
}

export default App;
