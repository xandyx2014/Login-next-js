import Head from 'next/head'
import React, { ReactElement } from 'react'
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import FormLogin from './_formLogin';
interface Props {

}

export default function login({ }: Props): ReactElement {
  
  return (
    <>

      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
      </Head>
      <div className='header-filter' style={{ backgroundImage: 'url(/bg7.jpg)' }}>
        <Navbar title='My Awesome' textButton='Register' urlButton='/register'></Navbar>
        <FormLogin/>
      </div>
      <Footer/>




    </>
  )
}
