import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import WatchHistory from "./pages/WatchHistory";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;
