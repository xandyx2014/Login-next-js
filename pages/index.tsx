import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div style={styles}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
      </Head>
      <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100">
        <div className="container">
          <div className="navbar-translate">
            <Link href='/'>
              <a className="navbar-brand">
                My awesome project </a>
            </Link>

            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button> */}
          </div>
          <div >
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link href='/public'>
                  <a className="nav-link">
                     Public
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/login'>
                  <a className="nav-link">
                    Login
                  </a>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-header header-filter backgroundMain" data-parallax="true" style={{ backgroundImage: 'url(/bg3.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="brand text-center">
                <h1>My Title </h1>
                <h3 className="title text-center">My Subtitle</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <h2 className="title">Your main section here</h2>
          </div>
        </div>
      </div>
      <footer className="footer footer-default">
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
    </div>
  )
}
