import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "../../redux/user/userPasswordAction";


export default function ResetPassword({formSwitcher}){

    const dispatch = useDispatch();

    const [email, setEmail] = useState();

	const { isLoading, status, message } = useSelector(state => state.password);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(sendPasswordResetOtp(email));
    }

    const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};

    return(
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Passsword</h1>
                <br />
                {message && (
						<Alert variant={status === "success" ? "success" : "danger"}>
							{message}
						</Alert>
				)}
                {isLoading && <Spinner variant="primary" animation="border" />}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter your mail" required/>
                    </Form.Group>
                    <br />
                    <Button type="submit">Send Email</Button>
                </Form>
                <hr />
                </Col>
            </Row>
        </Container>
    )
}