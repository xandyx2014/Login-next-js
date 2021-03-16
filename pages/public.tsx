import React, { ReactElement } from 'react'
import Navbar from '../shared/components/navbar';
interface Props {
    
}

export default function publicMain({}: Props): ReactElement {
    return (
        <>
        <Navbar title="Public page" textButton="Menu" urlButton="/" trasparent={false}  />
        </>
    )
}
