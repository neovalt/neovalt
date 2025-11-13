import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}