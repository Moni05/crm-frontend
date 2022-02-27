import { Form, Button } from "react-bootstrap";

export default function NewComment({comment, handleOnChange, handleOnSubmit}){
    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Control name="" value={comment} onChange={handleOnChange} as="textarea" row="5" name="detail"></Form.Control>
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}