import React, { ReactElement } from 'react'
import Navbar from '../shared/components/navbar';
import { isAuthorizeHoc } from '../shared/service/authorization';
interface Props {
    
}

const componentPrivate = ({}: Props): ReactElement => {
    return (
        <div>
        <>
        <Navbar title="Private page" textButton="Logout" urlButton="/" trasparent={false}  />
        </>
        </div>
    )
}
const privateMain = isAuthorizeHoc(componentPrivate);
export default privateMain;
