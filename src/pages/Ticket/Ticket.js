import { Row, Col, Button, Container, Alert, Spinner } from "react-bootstrap";
import { BreadCrumb } from "../../components/Breadcrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import TicketComments from "../../components/TicketComments/TicketComments";
import NewComment from "../../components/NewComment/NewComment";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

import { fetchSingleTicket, closeTicket } from "../../redux/ticket/ticketAction";
import { resetResponseMsg } from "../../redux/ticket/ticketRedux";


export default function Ticket(){

    const { id } = useParams();
    const dispatch = useDispatch();

    const {
		isLoading,
		error,
		selectedTicket,
		replyMsg,
		replyTicketError,
	} = useSelector(state => state.tickets);

    useEffect(() => {
		dispatch(fetchSingleTicket(id));

		return () => {
			(replyMsg || replyTicketError) && dispatch(resetResponseMsg());
		};
	}, [id, dispatch, replyMsg, replyTicketError]);


    return(
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
				<Col>
					{isLoading && <Spinner variant="primary" animation="border" />}
					{error && <Alert variant="danger">{error}</Alert>}
					{replyTicketError && (
						<Alert variant="danger">{replyTicketError}</Alert>
					)}
					{replyMsg && <Alert variant="success">{replyMsg}</Alert>}
				</Col>
			</Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
					<div className="subject">Subject: {selectedTicket.subject}</div>
					<div className="date">
						Ticket Opened:{" "}
						{selectedTicket.openAt &&
							new Date(selectedTicket.openAt).toLocaleString()}
					</div>
					<div className="status">Status: {selectedTicket.status}</div>
				</Col>
				<Col className="text-right">
					<Button
						variant="outline-info"
						onClick={() => dispatch(closeTicket(id))}
						disabled={selectedTicket.status === "Closed"}
					>
						Close Ticket
					</Button>
				</Col>
            </Row>
            <Row className="mt-4">
				<Col>
					{selectedTicket.conversations && (
						<TicketComments comments={selectedTicket.conversations} />
					)}
				</Col>
			</Row>
            <br />
            <Row className="mt-4">
                <Col>
                    <NewComment _id={id} status={selectedTicket.status}/>
                </Col>
            </Row>
        </Container>
    )
}