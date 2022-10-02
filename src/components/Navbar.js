function Navbar() {
  const logo = process.env.PUBLIC_URL + '/assets/logo.png'

  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <h1>Oshare</h1>
    </nav>
  );
}

export default Navbar;
