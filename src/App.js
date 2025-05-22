import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Combine from "./Combine";
import Itoi from "./handmade/Itoi";
import Make from "./handmade/Make";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Combine />} />
        <Route path="/make" element={<Make />} />
        <Route path="/Itoi" element={<Itoi />} />
      </Routes>
    </BrowserRouter>
  );
}

/*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Combine />} />
        <Route path="/make" element={<Make />} />
      </Routes>
    </BrowserRouter> */
