import { Outlet, Navigate } from "react-router-dom"
import Cookie from 'universal-cookie';


const cookies = new Cookie();
const PrivateRoutes = ({children, ...rest}) => {
    let auth = cookies.get('token');
    //let auth = {'token':true}

  return (
    auth ? <Outlet/> : <Navigate to ="/MilagroFinanciero/Login" />
  )
};
export default PrivateRoutes;
