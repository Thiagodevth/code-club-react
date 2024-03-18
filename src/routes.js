import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './containers/Home';
import Users from "./containers/Users";

function ThRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default ThRoutes;