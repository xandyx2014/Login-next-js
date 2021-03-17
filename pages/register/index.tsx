import Head from 'next/head';
import MetaDescription from '../../shared/components/metaDescription';
import React, { ReactElement } from 'react'
import  Navbar from '../../shared/components/navbar';
import  Footer from '../../shared/components/footer';
import FormRegister from './_formRegister';
interface Props {
    
}

export default function register({}: Props): ReactElement {
    return (
        <>
            <Head>
                <title>Login</title>
                <MetaDescription/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
            </Head>
            <div className='header-filter' style={ { backgroundImage: 'url(/bg2.jpg)'}}>
            <Navbar title='My Awesome' textButton='Login' urlButton='/login'></Navbar>
            <FormRegister/>
            </div>
            <Footer/>
      
    
            
        </>
    )
}
