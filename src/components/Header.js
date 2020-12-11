import React from 'react';

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-0 justify-content-center">
        <div className="w-100 order-1 text-center text-md-left">
            <a className="navbar-brand bg-info px-3" href="/portfolio/">Max Lemieux</a>
        </div>
        <div className="order-3 navbar-expand text-center text-md-right">
          <ul className="navbar-nav">
            <li className={"nav-item" + (props.page === 'index' && " active")}
              onClick={() => props.setState({ page: "index" })}>
                <span className="nav-link">About</span>
            </li>
            <li className={"nav-item" + (props.page === 'portfolio' && " active")}
              onClick={() => props.setState({ page: "portfolio" })}>
                <span className="nav-link">Portfolio</span>
            </li>
            <li className={"nav-item" + (props.page === 'contact' && " active")}
              onClick={() => props.setState({ page: "contact" })}>
                <span className="nav-link">Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>            
  )
}

export default Header;