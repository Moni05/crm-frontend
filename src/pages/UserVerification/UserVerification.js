import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import "./UserVerification.css";
import { useParams } from "react-router-dom";
import { userRegistrationVerification } from "../../redux/user/userApi";

const initialResponse = {
    status: "",
    message: "",
};

export default function UserVerification(){

    const { _id, name } = useParams();

    const dt = { _id, name }

    const [response, setResponse] = useState(initialResponse);

    useEffect(()=>{

        const apiCall = async () => {
            const result = await userRegistrationVerification(dt);
            setResponse(result);
        }

        !response.status && apiCall();

    }, [response])

    return(
        <div className="verification-page app-layout bg-info">
            <div className="mt-5">
                <div className="form-box jumbotron">
                {!response.status && <Spinner variant="info" animation="border" />}
                {response.status && (<Alert variant={response.status === "success" ? "success" : "danger"}>
                    {response.message}
                </Alert>
                )}
                </div>
            </div>
        </div>
    )
}