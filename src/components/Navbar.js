/* eslint-disable */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPages() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">로고</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#list">길드 구직 리스트</Nav.Link>
              <Nav.Link href="#form">길드 구인 신청</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://open.kakao.com/o/sAJp6DVe">
                카카오톡 아이콘
              </Nav.Link>
              <Nav.Link href="https://github.com/mj9457/lostark-guild-filtering">
                깃허브 아이콘
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPages;
