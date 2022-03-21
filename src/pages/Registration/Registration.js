import React from "react";
import "./Registration.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function Registration(){
    return(
        <div className="registration-page app-layout bg-info">
            <div className="mt-5">
                <div className="form-box jumbotron">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}