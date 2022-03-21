import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { replyOnTicket } from "../../redux/ticket/ticketAction";


export default function NewComment({_id, status}){

    const dispatch = useDispatch();

    const {
        user: { name },
    } = useSelector((state) => state.userDetail);

    const [message, setMessage] = useState("");

    const handleOnChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      const msgObj = {
        message,
        sender: name,
      };
  
      dispatch(replyOnTicket(_id, msgObj));
      setMessage("");
    };

    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Label></Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control value={message} onChange={handleOnChange} as="textarea" row="5" name="detail" disabled={status === "Closed"}/>
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}