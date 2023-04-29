import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;

/**
 * ===============> STEP
 * 01. check user is logged in or not
 * 02. if user is logged in, then allow them to visit the route
 * 03. else redirect the user to the login page
 * 04. setup the private router
 * 05. handle loading
*/