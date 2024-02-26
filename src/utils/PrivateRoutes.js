import { Outlet, Navigate } from "react-router-dom"
//import Cookie from 'universal-cookie';

//const cookies = new Cookie();
const PrivateRoutes = ({children, ...rest}) => {
    //let auth = cookies.get('token');
    //let auth = {'token':true}

  return (
    sessionStorage.getItem("token") ? <Outlet/> : <Navigate to ="/MilagroFinanciero/Login" />
  )
};
export default PrivateRoutes;
