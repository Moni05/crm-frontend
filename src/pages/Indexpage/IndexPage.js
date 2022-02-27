import React, { useState } from "react";
import Login from "../../components/Login/Login";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import "./IndexPage.css";

export default function IndexPage(){

    const [formLoad, setFormLoad] = useState("login")

    const formSwitcher = formType => {
		setFormLoad(formType);
	};

    return(
        <div className="index-page app-layout bg-info">
            <div className="mt-5">
                <div className="form-box jumbotron">
                    {formLoad === "login" ? <Login formSwitcher={formSwitcher} />: <ResetPassword formSwitcher={formSwitcher}/>}
                </div>
            </div>
        </div>
    )
}