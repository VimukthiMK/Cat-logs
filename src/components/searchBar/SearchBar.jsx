import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from 'src/redux/cats/catSlice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state) => state.cats)

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <input
      type="text"
      className="form-control mb-4" 
      placeholder="Search breeds"
      value={searchTerm}
      onChange={handleInputChange}
    />
  )
}

export default SearchBar
