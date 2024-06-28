import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from 'src/redux/cats/catActions'
import { selectCat } from 'src/redux/cats/catSlice'
import { useNavigate } from 'react-router-dom'

const BreedList = () => {
  const { searchTerm, cats,status } = useSelector((state) => state.cats)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  )
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
    <ul className="list-group">
      {filteredCats.map((cat) => (
        <li
          key={cat.id}
          className="list-group-item list-group-item-action"
          onClick={() => handleCatClick(cat)}
        >
          {cat.name}
        </li>
      ))}
    </ul>
  )
}

export default BreedList
