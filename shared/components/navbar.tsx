import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    title: string;
    textButton: string;
    urlButton: string;
}

export default function _navbar({title, textButton, urlButton }: Props): ReactElement {
    return (
        <div>
            <nav className="navbar navbar-default navbar-expand-lg navbar-transparent" role="navigation-demo">
            <div className="container">
              
              <div className="navbar-translate">
                  <Link href="/">
                  <a className="navbar-brand">{ title }</a>
                  </Link>
              </div>
             
              <div>
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item ">
                      <Link href='/'>
                      <a className="nav-link">
                      Home
                        </a>
                      </Link>
                  </li> */}
                  <li className="nav-item">
                      <Link href={urlButton}>
                      <a className="btn btn-rose btn-raised btn-round text-light" data-toggle="dropdown">
                      { textButton }
                     </a>
                      </Link>
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}
