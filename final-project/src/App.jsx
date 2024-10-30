import './App.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import BasicRouter from './routes/BasicRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <BasicRouter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
