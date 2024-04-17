import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
        
            <li>
            <Link to="/sobre">Sobre Mim</Link>
            </li>
        
            <li>
            <Link to="/viagens">Viagens</Link>
            </li>
        
            <li>
            <Link to="/projetos">Projetos</Link>
            </li>
        
            <li>
            <Link to="/cafe">Café</Link>
            </li>
        
            <li>
            <Link to="/contato">Contato</Link>
            </li>
        </ul>
        </>
    );
}

export default Navbar;