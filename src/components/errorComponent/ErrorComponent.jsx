import { useSelector } from "react-redux"

const ErrorComponent = () => {
    const { error } = useSelector((state) => state.cats)
  return (
        <div className="container d-flex justify-content-center">
          <div className="text-center bg-light p-4 rounded shadow-sm" style={{ maxWidth: '600px' }}>
          <p className="text-danger fs-5">Error: {error}</p>
          </div>
      </div>
  
)
}

export default ErrorComponent
