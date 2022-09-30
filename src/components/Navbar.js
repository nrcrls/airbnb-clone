import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <h1>Oshare</h1>
    </nav>
  );
}

export default Navbar;
