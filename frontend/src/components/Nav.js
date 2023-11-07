import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Secondnav from "./Secondnav.js";

function Nav() {
  return (
    <nav className="navbar row">

      <div className="row align-items-center">
        <div className="col-3 text-center">
          <Link className="navbar-brand" to="/">
            <h1 className="pt-4">Bikeswale <FontAwesomeIcon icon={faMotorcycle} style={{color: "#000000",}} /></h1>
          </Link>
        </div>
        <div className="col-6 text-center">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-outline-dark" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="col-3 text-center">
          <Link className="nav-link" to="/login" id="login">
            <h5>Login / Signup <FontAwesomeIcon icon={faUser} style={{color: "#000000",}}/></h5>
          </Link>
        </div>
      </div>

      <Secondnav />

    </nav>

  )
}
export default Nav;
