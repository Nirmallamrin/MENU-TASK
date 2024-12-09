import React from 'react'
import HomePage from './pages/HomePage'
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/menu" Component={Menu} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App