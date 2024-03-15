import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ListDoctor from "./Pages/ListDoctor";
import Payment from "./Pages/Payment";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctors/appointment/:did/:time/:tslid" element={<Appointment />} />
          <Route path="doctors/appointment/payment" element={<Payment />} />
          <Route path="/doctors" element={<ListDoctor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
