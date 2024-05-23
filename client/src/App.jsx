import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddPage />} />
        <Route path="/add-product/:id" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
