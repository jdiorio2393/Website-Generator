import React from 'react';
import './App.css';
import './Layout/Layout';
import Layout from './Layout/Layout';
import { GlobalProvider } from './Components/Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Layout />;
    </GlobalProvider>
  );
}

export default App;
