import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
export const isAuthorizeHoc = ( Component ) => {
    
    return () => {
        const router = useRouter();
        const [ok, setOk] = useState(true);
        const auth = async () => {
            const tk = localStorage.getItem('tk');
            // TODO: Validate jwt
            if (typeof tk === 'undefined' || tk === null) {
                return true;
            } 
            return false;
        }
        useEffect(()=> {
            Promise.all([
                auth()
            ]).then( ([isAuth]) => {
                console.log(isAuth);
                if (isAuth) {
                    router.push('/login');
                } else {
                    setOk(false);
                }
                
                
            });
        }, []);
        return <div>
            { ok ? (<div> Loading </div>): (<Component></Component>) }
        </div>;
        
    }
}