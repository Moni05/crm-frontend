import { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import SearchTicket from "../../components/SearchTicket/SearchTicket";
import Ticket from "../../components/Ticket/Ticket";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "../../redux/ticket/ticketAction";

export default function TicketListing(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);

    return(
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/create-ticket"><Button variant="info">Add new ticket</Button></Link>
                </Col>
                <Col className="text-right">
                    <SearchTicket />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Ticket />
                </Col>
            </Row>
        </Container>
    )
}