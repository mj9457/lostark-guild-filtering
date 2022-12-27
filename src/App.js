import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';

import { Routes, Route } from 'react-router-dom';

import NavbarPages from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarPages />

      <Routes>
        {/* main page */}
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/main" element={<div>메인페이지</div>} />

        {/* list page */}
        <Route path="/list" element={<div>길드구직리스트</div>} />

        {/* form page */}
        <Route path="/form" element={<div>길드구인신청폼</div>} />

        {/* 404 page */}
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
