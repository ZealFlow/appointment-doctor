import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import List from "../Components/List";

function ListDoctor() {
    return (
        <div className="home-section">
            <Navbar />
            <List/>
            <Footer />
        </div>
    );
}

export default ListDoctor;
