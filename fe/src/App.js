import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppProvider } from "./context/appContext";

function App() {
  useEffect(() => {
    (async () => {
      const data = await axios.get("/api");
      console.log(data);
    })();
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
