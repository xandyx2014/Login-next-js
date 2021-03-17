import Head from 'next/head';
import MetaDescription from '../shared/components/metaDescription';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import Navbar from '../shared/components/navbar';
import { isAuthorizeHoc } from '../shared/service/_authorization';
interface Props {

}

const componentPrivate = ({ }: Props): ReactElement => {
    const router = useRouter();
    const [user, setUser] = useState('');
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('tk'));
        axios.get('/api/private', {
            headers: {
                'Authorization': `${user.token}`
            }
        }).then(e => {
            setUser(user.name);
            console.log(e);
        }).catch(e => {
            console.log(e);
        });
    }, []);
    return (
        <div>
            <>
                <Head>
                    <title>Home</title>
                    <MetaDescription />
                </Head>
                <Navbar
                    title={`Private page Welcome ${user}`}
                    urlTitle='/private'
                    onClickButton={() => {
                        localStorage.clear();
                    }}
                    textButton="Logout"
                    urlButton="/"
                    trasparent={false} />
            </>
        </div>
    )
}
const privateMain = isAuthorizeHoc(componentPrivate);
export default privateMain;
