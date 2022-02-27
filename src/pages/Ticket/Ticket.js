import { Row, Col, Button, Container } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import tickets from "../../data.json";
import TicketComments from "../../components/TicketComments/TicketComments";
import NewComment from "../../components/NewComment/NewComment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function Ticket(){

    const {id} = useParams();

    const [comment, setComment] = useState();
    const [ticket, setTicket] = useState();


    useEffect(() => {}, [comment]);

    const handleOnChange = (e) => {
        setComment(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }

    return(
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    {id}
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">Created At: {ticket.addedAt}</div>
                    <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col className="text-end">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <TicketComments comments={ticket.history} />
                </Col>
            </Row>
            <br />
            <Row className="mt-4">
                <Col>
                    <NewComment comment={comment} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}