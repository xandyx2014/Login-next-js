import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Navbar from '../../shared/components/navbar';
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
        <div className="container mt-4" >
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-login">
                <form className="form">
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Login</h4>
                    <div className="social-line">
                      <a className="btn btn-just-icon btn-link">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a className="btn btn-just-icon btn-link">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="btn btn-just-icon btn-link">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>
                  <p className="description text-center">login to My awesome project</p>
                  <div className="card-body">

                    <form>
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>


                      
                      <div className="footer text-center">
                        <a className="btn btn-primary btn-link btn-wd btn-lg">Get Started</a>
                      </div>
                    </form>

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-default text-primary">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <Link href='/'>
                  <a>
                    Awesome project
                  </a>
                </Link>

              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
       Made with <i className="fa fa-heart"></i> by
        <a target="blank">Awesome project </a> for a better web.
      </div>
        </div>
      </footer>




    </>
  )
}
