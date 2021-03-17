import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    title: string;
    textButton: string;
    urlButton: string;
    trasparent?: boolean;
    onClickButton?: Function
}

export default function _navbar({title, textButton, urlButton, trasparent = true, onClickButton = () => {} }: Props): ReactElement {
  const classNavbar = "navbar navbar-default navbar-expand-lg "; 
  const navbar = trasparent ? classNavbar  + "navbar-transparent":  classNavbar + "bg-dark";
  return (
        <div>
            <nav className={navbar} role="navigation-demo">
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
                      <a onClick={ () => { onClickButton() }} className="btn btn-rose btn-raised btn-round text-light" data-toggle="dropdown">
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
