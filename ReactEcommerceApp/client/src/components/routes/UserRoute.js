import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';


const UserRoute = ({children, ...rest}) => { // ...rest => meant rest of the Props except children 
    // Check user state to already logged in?
    const {user} = useSelector((state) => ({...state}));
    console.log(user);

    //return <Route {...rest} render={() => children} />;

    return user && user.token ? (
        <Route {...rest} render={() => children} />
    ) : (
        <LoadingToRedirect />
    );
    
}

export default UserRoute;

