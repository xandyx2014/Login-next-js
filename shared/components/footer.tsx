import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function footer({}: Props): ReactElement {
    return (
        <>
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
       Made with  <i className="fa fa-heart"></i> by
        <a target="blank">Awesome project</a> for a better web.
      </div>
        </div>
      </footer>
        </>
    )
}
