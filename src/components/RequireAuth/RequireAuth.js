import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const RequireAuth = ({children}) => {
    let location = useLocation();
    const {user} = useFirebase();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;