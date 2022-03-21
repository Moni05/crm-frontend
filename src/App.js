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
import { loginSuccess } from "./redux/user/userRedux";
import { getUserProfile } from "./redux/user/userDetailAction";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {


  const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.user);
	const { user } = useSelector(state => state.userDetail);
  console.log(user._id);

  useEffect(()=>{

    !user._id && dispatch(getUserProfile());

  }, [dispatch, isAuth, user._id])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/verify-account/:_id/:name" element={<UserVerification />} />
        <Route path="/dashboard" element={ user._id ? <Layout><Dashboard /></Layout> : <Navigate to="/" /> } />
        <Route path="/create-ticket" element={ user._id ? <Layout><NewTicket /></Layout> : <Navigate to="/" /> } />
        <Route path="/tickets" element={ user._id ? <Layout><TicketListing /></Layout> : <Navigate to="/" /> } />
        <Route path="/ticket/:id" element={ user._id ? <Layout><Ticket /></Layout> : <Navigate to="/" /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
