import React from 'react';
import { usePageContext } from "../utils/GlobalState";

export default function Header() {
  const [state, dispatch] = usePageContext();

  return (
    <header>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-0 justify-content-center">
        <div className="w-100 order-1 text-center text-md-left">
            <a className="navbar-brand bg-info px-3" href="index.html">Max Lemieux</a>
        </div>
        <div className="order-3 navbar-expand text-center text-md-right">
          <ul className="navbar-nav">
            <li className="nav-item active" onClick={() => dispatch({ type: "set", page: "About" })}>
                <a className="nav-link" href="index.html">About</a>
            </li>
            <li className="nav-item" onClick={() => dispatch({ type: "set", page: "Portfolio" })}>
                <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item" onClick={() => dispatch({ type: "set", page: "Contact" })}>
                <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>            

  )
}