import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from 'src/redux/cats/catActions'
import { selectCat } from 'src/redux/cats/catSlice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cats, status, error } = useSelector((state) => state.cats)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCats())
    }
  }, [status, dispatch])

  const handleCatClick = (cat) => {
    dispatch(selectCat(cat))
    navigate(`/breed/${cat.id}`)
  }


  return (
    <div className="container mt-5 mb-4">
      <h1 className="mb-4">Cat Catalog</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-danger">Error: {error}</p>}
      <ul className="list-group">
        {cats.map((cat) => (
          <li
            key={cat.id}
            className="list-group-item list-group-item-action"
            onClick={() => handleCatClick(cat)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
