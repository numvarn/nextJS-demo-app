'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  const handleMenuClick = () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    if (offcanvasElement && typeof window !== 'undefined') {
      const bootstrap = (
        window as unknown as {
          bootstrap?: {
            Offcanvas?: {
              getInstance: (element: HTMLElement) => { hide: () => void } | null
            }
          }
        }
      ).bootstrap
      const bsOffcanvas = bootstrap?.Offcanvas?.getInstance(offcanvasElement)
      if (bsOffcanvas) {
        bsOffcanvas.hide()
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          NextJS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-light d-lg-none"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${isActive('/')}`}
                  aria-current="page"
                  href="/"
                  onClick={handleMenuClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${isActive('/user/regis')}`}
                  href="/user/regis"
                  onClick={handleMenuClick}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${isActive('/user/login')}`}
                  href="/user/login"
                  onClick={handleMenuClick}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
    </nav>
  )
}
