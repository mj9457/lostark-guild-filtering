import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NavbarPages from './components/Navbar';
import GuildList from './pages/GuildList';

function App() {
  return (
    <div className="App">
      <NavbarPages />

      <Routes>
        {/* main page */}
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />

        {/* list page */}
        <Route path="/list" element={<GuildList />} />

        {/* form page */}
        <Route path="/form" element={<div>길드구인신청폼</div>} />

        {/* 404 page */}
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
