import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// Import Components
import { Navbar, Feed, VideoDetail, SearchFeed } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#132132" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
