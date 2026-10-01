import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./component/Auth/Login";

export default function ProtectedRoutes() {

    const isAuth = JSON.parse(localStorage.getItem ("token"))

    if (!isAuth){
        return <Navigate  to="/Login"/>
    }

    return <Outlet />

}
  
