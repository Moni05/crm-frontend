import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/user/userRedux";
import { useDispatch } from "react-redux";

export default function Header(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Logout = () =>{
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/");
    }



    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
            <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                <Nav.Link onClick={Logout}>Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}