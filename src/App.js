import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FavList from "./components/FavList/FavList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/fav" element={<FavList />}></Route>
      </Routes>
    </>
  );
}

export default App;
