export default function NavBar() {
  return (
<nav style={{ backgroundColor: 'var(--primary-color-1)'}} className="navbar navbar-expand-lg navbar-light justify-content-between" >
  <div className="container">

  <a className="navbar-brand" href="#">
    <img src="/logo.png" alt="Strike" style={{maxHeight: 75}}/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="lessons">Lessons</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Partner Brand</a>
      </li>
    </ul>
    <div className="d-flex">
      <button type="button" className="btn btn-outline-secondary me-2">
        <a className="nav-link" href="/login">Log In</a>
      </button>
      <button type="button" className="btn btn-secondary">
        <a className="nav-link" href="/joinus">Join Us</a>
      </button>
    </div>
  </div>
  </div>
</nav>
  )
}
