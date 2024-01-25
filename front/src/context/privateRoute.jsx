import React, { useEffect } from 'react';
import useUserStore from '../stores/user.store';
import { Navigate } from 'react-router-dom';


const privateRoute = ({children}) => {
    const store = useUserStore();

    useEffect(() => {
        if(!store.isAuthentified & !store.isloading) {
            <Navigate to="/auth" />
        }
    }, [store.isLoading]);
    return (
        <>
         {children}
        </>
    );
};

export default privateRoute;