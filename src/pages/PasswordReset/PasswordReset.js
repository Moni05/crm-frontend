import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "../Indexpage/IndexPage.css";
import { Link } from "react-router-dom";

import ResetPassword from "../../components/ResetPassword/ResetPassword";
import UpdatePasswordForm from "../../components/updatePasswordForm/updatePasswordForm";



export const PasswordReset = () => {
	const { showUpdatePassForm } = useSelector(state => state.password);
    console.log(showUpdatePassForm);

	return (
		<div className="index-page app-layout bg-info">
		<div className="mt-5">
			<div className="form-box jumbotron">
				{showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />}
				<Link to="/">Login Now</Link>
			</div>
		</div>
	    </div>
	);
};