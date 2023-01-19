import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material' ;
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
