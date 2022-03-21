import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import Ticket from "../../components/Ticket/Ticket";
import { Link } from "react-router-dom";

import { fetchAllTickets } from "../../redux/ticket/ticketAction"

export default function Dashboard(){

    const dispatch = useDispatch();
    const { tickets } = useSelector((state) => state.tickets);

    useEffect(() => {
        if (!tickets.length) {
          dispatch(fetchAllTickets());
        }
    }, [dispatch, tickets]);

    const pendingTickets = tickets.filter((row) => row.status !== "Closed");
    const totlatTickets = tickets.length;

    return(
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5 mb-2 text-center">
                    <Link to="/create-ticket">
                        <Button variant="info">Add new ticket</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center  mb-2">
                    <div>Total tickets: {totlatTickets}</div>
                    <div>Pending tickets: {pendingTickets.length}</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">Recently Added tickets</Col>
            </Row>
            <hr />
            
            <Row>
                <Col className="recent-ticket">
                    <Ticket/>
                </Col>
            </Row>
        </Container>
    )
}