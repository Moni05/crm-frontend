import { Row, Form, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./NewTicketForm.css";
import { shortText } from "../../utils/validation";

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

    const [formData, setFormData] = useState(initialFromDt);
    const [formDataErro, setFormDataErro] = useState(initialFormError);

    useEffect(()=>{

    }, [formData])

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

    }

    return(
        <div className="new-ticket">
            <h1 className="text-info text-center">Create a ticket</h1>
            <br />
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