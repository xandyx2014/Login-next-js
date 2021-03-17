import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'
import Navbar from '../shared/components/navbar';
import { isAuthorizeHoc } from './_authorization';
interface Props {

}

const componentPrivate = ({ }: Props): ReactElement => {
    const router = useRouter();
    return (
        <div>
            <>
                <Navbar
                    title="Private page"
                    onClickButton={ () => {
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
