import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PaymentCommponent from "../Components/PaymentCommponent";

const Payment = () => {
  return (
    <>
      <Navbar />
      <PaymentCommponent />
      <Footer />
    </>
  );
};

export default Payment;
