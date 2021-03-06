import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPending, loginFail, loginSuccess } from "../../redux/user/userRedux";
import { userLogin } from "../../redux/user/userApi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getUserProfile } from "../../redux/user/userDetailAction";


export default function Login({formSwitcher}){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();

    const { isLoading, isAuth, error } = useSelector(state => state.user)

    let { from } = location.state || { from: { pathname: "/" } };

    useEffect(()=>{
        (localStorage.getItem("infiniteScrollEnabled") !== null) && 
        JSON.parse(localStorage.getItem("token")).accessToken && navigate(from, { from });
    }, [isAuth, navigate])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        if (!email || !password) {
			return alert("Fill up all the form!");
		}

        dispatch(loginPending());

        try{

            const isAuth = await userLogin({ email, password });

            if(isAuth.status === "error"){
                return dispatch(loginFail(isAuth.message));
            }

            dispatch(loginSuccess(isAuth.accessToken));
            dispatch(getUserProfile());
            navigate("/dashboard");
        }
        catch(err){
            dispatch(loginFail(error.message));
        }
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Login</h1>
                <br />
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter your mail" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={handleOnChange} placeholder="Enter your password" required/>
                    </Form.Group>
                    <br />
                    <Button type="submit">Login</Button>
                    {isLoading && <Spinner variant="primary" animation="border" />}
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
				<Col>
                <Link to="/password-reset">Forget Password?</Link>
				</Col>
			</Row>
            <Row className="py-4">
				<Col>
					Are you new here? <Link to="/registration">Register Now</Link>
				</Col>
			</Row>
        </Container>
    )
}