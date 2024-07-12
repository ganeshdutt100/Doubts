import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <NavLink className={(e) => e.isActive ? "red" : "navbar-brand"} to="/">Navbar</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={(e) => e.isActive ? "red nav-link" : "nav-link"} to="/">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(e) => e.isActive ? "active nav-link" : "nav-link"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(e) => e.isActive ? "active nav-link" : "nav-link"} to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;