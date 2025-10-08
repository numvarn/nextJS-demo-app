'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(formRef.current!)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Account data:', data)
      setMessage(`✅ Account "${data.email}" logged in successfully!`)
      setMessageType('success')
      formRef.current?.reset()
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message)
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="container"
      style={{ maxWidth: '600px', marginTop: '100px' }}
    >
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 ">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="card-title mb-4 text-center">Sign In</h3>

              {message && (
                <div
                  className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}
                  role="alert"
                >
                  {message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sign In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
            </div>
            <div className="text-center mb-4">
              Don&apos;t have an account?&nbsp;
              <Link href="/user/regis">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
