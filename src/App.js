import './App.css';
import { useEffect } from "react";
import IndexPage from './pages/Indexpage/IndexPage';
import Registration from './pages/Registration/Registration';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import NewTicket from './pages/NewTicket/NewTicket';
import TicketListing from './pages/TicketListing/TicketListing';
import Ticket from './pages/Ticket/Ticket';
import UserVerification from './pages/UserVerification/UserVerification';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

  const { isAuth } = useSelector((state) => state.user);
  console.log(isAuth);

  useEffect(()=>{},[isAuth]);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/verify-account/:_id/:name" element={<UserVerification />} />
        <Route path="/dashboard" element={ isAuth ? <Layout><Dashboard /></Layout> : <Navigate to="/" /> } />
        <Route path="/create-ticket" element={ isAuth ? <Layout><NewTicket /></Layout> : <Navigate to="/" /> } />
        <Route path="/tickets" element={ isAuth ? <Layout><TicketListing /></Layout> : <Navigate to="/" /> } />
        <Route path="/ticket/:id" element={ isAuth ? <Layout><Ticket /></Layout> : <Navigate to="/" /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;