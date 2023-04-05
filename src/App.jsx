import { useState } from "react";

import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Carimobil } from "./Pages/Carimobil";
import HasilCari from "./Pages/HasilCari";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Carimobil" element={<Carimobil />}></Route>
        <Route path="/hasil-cari" element={<HasilCari />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
