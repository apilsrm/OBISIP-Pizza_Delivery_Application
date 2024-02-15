/* eslint-disable react/prop-types */

import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = ({isAuthenticated, children, adminRoute, isAdmin}) => {
    if (!isAuthenticated){
        return <Navigate to='/login' />
    }

    if(adminRoute && !isAdmin ) {
        return <Navigate to="/unauthorize"/>
    }
    return children ? children : <Outlet/>

}



export default ProtectedRoutes