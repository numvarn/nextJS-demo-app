'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            NextJS
          </a>
          <div className="ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/')}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/user/regis')}`}
                  href="/user/regis"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/user/login')}`}
                  href="/user/login"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
