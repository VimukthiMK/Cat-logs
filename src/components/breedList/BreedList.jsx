import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from 'src/redux/cats/catActions'
import { selectCat } from 'src/redux/cats/catSlice'
import { useNavigate } from 'react-router-dom'

import BreedListSkeleton from '../loadingSkeleton/BreedListSkeleton'
import { AiOutlineRight } from "react-icons/ai" // React-icons

const BreedList = () => {
  const { searchTerm, cats, status } = useSelector((state) => state.cats)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  )

  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])

  const handleCatClick = (cat) => {
    dispatch(selectCat(cat))
    navigate(`/breed/${cat.id}`) // Navigate to SingleBreedPage
  }

  // React Loading Skeleton
  if (status === 'loading') {
    return <BreedListSkeleton/>
  }

  return (
    <ul className="list-group">
      {filteredCats.map((cat) => (
        <li
          key={cat.id}
          className="list-group-item list-group-item-action   d-flex justify-content-between align-items-center  "
          onClick={() => handleCatClick(cat)}
          style={{ cursor: 'pointer' }}
        >
          {cat.name}
          <AiOutlineRight />
        </li>
      ))}
    </ul>
  )
}

export default BreedList
