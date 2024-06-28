// src/routes/notFoundPage/NotFoundPage.js
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="text-center bg-light p-4 rounded shadow-sm" style={{ maxWidth: '600px' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link className="btn btn-success" to="/">Go to Home</Link>
          </div>
        </div>
      </div>
  )
}

export default NotFoundPage