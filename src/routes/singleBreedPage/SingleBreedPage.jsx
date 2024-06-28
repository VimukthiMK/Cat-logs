import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchCatById } from 'src/redux/cats/catActions'

const SingleBreedPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedCat, status, error } = useSelector((state) => state.cats)

  useEffect(() => {
    // Fetch cat by id only if selected Cat is null or the id does not match
    if (!selectedCat || selectedCat.id !== id) {
      dispatch(fetchCatById(id))
    }
  }, [id, dispatch, selectedCat])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>
  }

  if (status === 'succeeded' && !selectedCat) {
    return <p>Cat not found.</p>
  }

  return (
    <div className="container mt-5">
      {selectedCat ? (
        <>
          <h1>{selectedCat.name}</h1>
          <img
            src={selectedCat.image?.url}
            alt={selectedCat.name}
            style={{ maxWidth: '300px', height: 'auto' }}
            className="img-fluid mb-3"
          />
          <p><strong>Origin:</strong> {selectedCat.origin}</p>
          <p><strong>Life Span:</strong> {selectedCat.life_span} years</p>
          <p>{selectedCat.description}</p>
          <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SingleBreedPage
