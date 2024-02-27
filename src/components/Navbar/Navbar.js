import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul>
                <li> <Link to="/" className="link">Home</Link></li>
                <li> <Link to="/fav" className="link">Favorites</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;