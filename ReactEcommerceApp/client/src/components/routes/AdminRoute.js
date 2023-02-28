import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {isAdminUser} from '../../api/User';
import LoadingToRedirect from './LoadingToRedirect';


const AdminRoute = ({children, ...rest}) => {
    // Get logged 'user' from state.
    const {user} = useSelector((state) => ({...state}));
    const [isAdmin, setIsAdmin] = useState(false);

    // Check is "Admin"
    useEffect(() => {
        if (user && user.token) {
            // Check in backend.
            isAdminUser(user.token).then((res) => {
                setIsAdmin(true);
                console.log("Admin User: ", user);
            }).catch((err) => {
                setIsAdmin(false);
                console.log("Admin User: ", err);
            });
        }
    }, [user]);

    // return isAdmin ? (<Route {...rest} render={() => children} />) : (<LoadingToRedirect />);
    return isAdmin ? (children) : (<LoadingToRedirect />);
}

export default AdminRoute;