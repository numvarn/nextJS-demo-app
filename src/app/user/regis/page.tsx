'use client'

import { useState, useRef } from 'react'

export default function CreateProductPage() {
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
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Account data:', data)
      setMessage(
        `✅ Account "${data.firstName} ${data.lastName}" created successfully!`
      )
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
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm mt-5">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Create Account</h3>

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
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="first-name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                name="last-name"
                required
              />
            </div>

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
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
