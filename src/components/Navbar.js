/* eslint-disable */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPages() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        // fixed="top"
        style={{ padding: '0' }}
      >
        <Container>
          <Navbar.Brand href="main" style={{ padding: '0' }}>
            <i className="ri-question-mark ri-2x"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="list">🔸길드구직리스트</Nav.Link>
              <Nav.Link href="form">🔹길드구인신청폼</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://open.kakao.com/o/sAJp6DVe">
                <i className="ri-kakao-talk-fill ri-2x"></i>
              </Nav.Link>
              <Nav.Link href="https://github.com/mj9457/lostark-guild-filtering">
                <i className="ri-github-fill ri-2x"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPages;
