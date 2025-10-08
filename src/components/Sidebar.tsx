'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
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
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : 'link-dark'}`}
            aria-current="page"
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={`nav-link ${isActive('/dashboard') ? 'active' : 'link-dark'}`}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/orders"
            className={`nav-link ${isActive('/orders') ? 'active' : 'link-dark'}`}
          >
            <i className="bi bi-table me-2"></i>
            Orders
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`nav-link ${isActive('/products') ? 'active' : 'link-dark'}`}
          >
            <i className="bi bi-grid me-2"></i>
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/customers"
            className={`nav-link ${isActive('/customers') ? 'active' : 'link-dark'}`}
          >
            <i className="bi bi-people me-2"></i>
            Customers
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
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <Link className="dropdown-item" href="/settings">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
