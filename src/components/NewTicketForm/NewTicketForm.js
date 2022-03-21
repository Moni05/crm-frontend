import { Row, Form, Col, Button, Alert, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NewTicketForm.css";
import { shortText } from "../../utils/validation";
import { openNewTicket } from "../../redux/addTicket/addTicketAction";
import { restSuccessMSg } from "../../redux/addTicket/addTicketRedux";
import { useNavigate } from "react-router-dom";

const initialFromDt = {
    subject: "",
    issueDate: "",
    message: "",
};

const initialFormError = {
    subject: false,
    issueDate: false,
    message: false,
};

export default function NewTicketForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        user: { name },
    } = useSelector((state) => state.userDetail);
  
    const { isLoading, error, successMsg } = useSelector(
      (state) => state.openTicket
    );

    const [formData, setFormData] = useState(initialFromDt);
    const [formDataErro, setFormDataErro] = useState(initialFormError);

    useEffect(() => {
        return () => {
          successMsg && dispatch(restSuccessMSg());
        };
    }, [dispatch, formData, formDataErro]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
          });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFormDataErro(initialFormError);

        const isSubjectValid = await shortText(formData.subject);

        setFormDataErro({
          ...initialFormError,
          subject: !isSubjectValid,
        });

        dispatch(openNewTicket({ ...formData, sender: name }));
        navigate("/tickets");

    }

    return(
        <div className="new-ticket">
            <h1 className="text-info text-center">Create a ticket</h1>
            <br />
            <div>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMsg && <Alert variant="primary">{successMsg}</Alert>}
                {isLoading && <Spinner variant="primary" animation="border" />}
            </div>
            <Form onSubmit={handleOnSubmit} className="new-ticket-form">
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control name="subject" value={formData.subject} 
                        maxLength="100" onChange={handleOnChange} placeholder="Subject"  required/>
                        <Form.Text className="text-danger">
                            {formDataErro.subject && "Subject is required!"}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="date" name="issueDate" value={formData.issueDate} onChange={handleOnChange} required />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="message" rows="5" value={formData.message} onChange={handleOnChange} required />
                </Form.Group>
                <Button type="submit" variant="info" className="mt-3"> Open Ticket</Button>
            </Form>
            <hr />
        </div>
    )
}