import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Login from '../../pages/login';



export const isAuthorizeHoc = ( Component ) => {
    
    return () => {
        const router = useRouter();
        if (true) {
            return <Login/>
        }
        return (<Component></Component>);
        
    }
}