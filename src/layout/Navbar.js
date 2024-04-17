import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
            <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/sobre">Sobre Mim</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/viagens">Viagens</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/cafe">Café</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
        </>
    );
}

export default Navbar;