import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvaider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loding from "../Page/Loding";


const PrivetRoute = ({children}) => {
    const {user ,loder} = useContext(AuthContext);
    const location = useLocation()
    

    if(loder){
        return <Loding></Loding>
    }

    if(user && user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivetRoute;