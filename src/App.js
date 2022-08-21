import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import './styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
