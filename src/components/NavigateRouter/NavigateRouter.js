import React from "react";
import Layout from "../Layout/Layout";
import { Route, Navigate } from "react-router-dom";

const isAuth = true;

export default function NavigateRouter({children, ...rest}){
    console.log(...rest);
    return(
        <Route
        {...rest}
        render ={()=> isAuth? <Layout>{children}</Layout> : <Navigate to="/"/>}
        />

    )
}