import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import  Navbar from '../../shared/components/navbar';
import  Footer from '../../shared/components/footer';
interface Props {
    
}

export default function register({}: Props): ReactElement {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
            </Head>
            <div className='header-filter' style={ { backgroundImage: 'url(/bg2.jpg)'}}>
            <Navbar title='My Awesome' textButton='Login' urlButton='/login'></Navbar>
            <div className="container mt-4" >
              <div className="row">
                <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                <div className="card card-login">
              <form className="form">
                <div className="card-header card-header-rose text-center">
                  <h4 className="card-title">Register</h4>
                  <div className="social-line">
                    <a  className="btn btn-just-icon btn-link">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a  className="btn btn-just-icon btn-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a  className="btn btn-just-icon btn-link">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                <p className="description text-center">Or Be classNameical</p>
                <div className="card-body">
        
                lorem
                  
                </div>
                <div className="footer text-center">
                  <a className="btn btn-primary btn-link btn-wd btn-lg">Get Started</a>
                </div>
              </form>
            </div>
                </div>
              </div>
            </div>
            </div>
            <Footer/>
      
    
            
        </>
    )
}
