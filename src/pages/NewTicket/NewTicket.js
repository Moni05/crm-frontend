import { Container, Row, Col } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import NewTicketForm from "../../components/NewTicketForm/NewTicketForm";

export default function NewTicket(){
    return(
        <Container>
            <Row>
                <Col>
                    <BreadCrumb  page="Create Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewTicketForm />
                </Col>
            </Row>
        </Container>
    )
}