import { Nav, Navbar, Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Link className="navbar-brand text-info" to="/">
          RemoteJobSearch
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link text-secondary active"
                  : "nav-link text-secondary"
              }
            >
              Home
            </Link>
            <Link
              to="favourites"
              className={
                location.pathname === "/favourites"
                  ? "nav-link text-secondary active"
                  : "nav-link text-secondary"
              }
            >
              Favourite
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
