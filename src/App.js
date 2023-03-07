import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import HomeAppli from "./pages/HomeAppli";
import HomeDev from "./pages/HomeDev";
import Mentions from "./pages/Mentions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeAppli />} />
        <Route path="/homedev" element={<HomeDev />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
