import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import Ticket from "../../components/Ticket/Ticket";
import tickets from "../../data.json";
import { Link } from "react-router-dom";

export default function Dashboard(){
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
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">Recently Added tickets</Col>
            </Row>
            <hr />
            
            <Row>
                <Col className="recent-ticket">
                    <Ticket tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}