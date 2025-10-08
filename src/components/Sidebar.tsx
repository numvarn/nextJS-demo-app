'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Sidebar() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  const handleMenuClick = () => {
    // Close offcanvas when menu item is clicked
    const offcanvasElement = document.getElementById('sidebarOffcanvas')
    if (offcanvasElement && typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bsOffcanvas = (window as any).bootstrap?.Offcanvas?.getInstance(
        offcanvasElement
      )
      if (bsOffcanvas) {
        bsOffcanvas.hide()
      }
    }
  }

  const sidebarContent = (
    <>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : 'link-dark'}`}
            aria-current="page"
            onClick={handleMenuClick}
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/user/login"
            className={`nav-link ${isActive('/user/login') ? 'active' : 'link-dark'}`}
            onClick={handleMenuClick}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Sign In
          </Link>
        </li>
        <li>
          <Link
            href="/user/regis"
            className={`nav-link ${isActive('/user/regis') ? 'active' : 'link-dark'}`}
            onClick={handleMenuClick}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Sign Up
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src="https://github.com/mdo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <Link
              className="dropdown-item"
              href="/settings"
              onClick={handleMenuClick}
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              href="/profile"
              onClick={handleMenuClick}
            >
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={handleMenuClick}>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  )

  return (
    <>
      {/* Offcanvas for mobile/tablet (< lg) */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex={-1}
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column p-3 bg-light">
          {sidebarContent}
        </div>
      </div>

      {/* Fixed sidebar for desktop (>= lg) */}
      <div
        className="d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{
          width: '280px',
          height: 'calc(100vh - 56px)',
          marginTop: '56px',
          position: 'fixed',
          top: 0,
          left: 0,
          overflowY: 'auto',
        }}
      >
        {sidebarContent}
      </div>
    </>
  )
}
