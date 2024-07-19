import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ligtPatt from "./assets/patt2.jpg"; // Adjust the path as necessary
import darkPatt from "./assets/patt.jpg"; // Adjust the path as necessary

function App() {
  const theme = useTheme();
  const backgroundImage = theme.palette.mode === "light" ? ligtPatt : darkPatt;

  return (
    <>
      <Router>
        <Box
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            color: theme.palette.text.primary,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about/*" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </>
  );
}

export default App;
