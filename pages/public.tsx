import React, { ReactElement } from 'react'
import Navbar from '../shared/components/navbar';
import Head from 'next/head';
import MetaDescription from '../shared/components/metaDescription';
interface Props {

}

export default function publicMain({ }: Props): ReactElement {
    return (
        <>
            <Head>
                <title>Public</title>
                <MetaDescription />
            </Head>
            <Navbar title="Public page" textButton="Menu" urlButton="/" trasparent={false} />
        </>
    )
}
