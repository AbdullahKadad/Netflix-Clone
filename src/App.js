import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FavList from './components/FavList/FavList';
function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/fav" element></Route>
    </Routes>
    
  );
}

export default App;
