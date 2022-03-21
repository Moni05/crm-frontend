import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";


export default function ResetPassword({formSwitcher}){

    const [email, setEmail] = useState();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
			case "email":

				setEmail(value);
				break;

			default:
				break;
		}
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email) {
			return alert("Fill up the email!");
		}
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Passsword</h1>
                <br />
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
            <Row>
				<Col>
					<a href="#" onClick={() => formSwitcher("login")}>Login</a>
				</Col>
			</Row>
        </Container>
    )
}