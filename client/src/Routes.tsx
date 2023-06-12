import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard.tsx";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default MainRoutes;