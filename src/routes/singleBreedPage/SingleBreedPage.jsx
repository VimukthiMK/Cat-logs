import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchCatById } from 'src/redux/cats/catActions'

import BreedDetailsSkeleton from 'src/components/loadingSkeleton/BreedDetailsSkeleton' // Skeletons
import BreedDetails from 'src/components/breedDetails/BreedDetails' //Breed details
import { AiOutlineLeft } from "react-icons/ai" // React-icons
import ErrorComponent from 'src/components/errorComponent/ErrorComponent' // Error

const SingleBreedPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedCat, status } = useSelector((state) => state.cats)

  useEffect(() => {
    if (!selectedCat || selectedCat.id !== id) {
      dispatch(fetchCatById(id))
    }
  }, [id, dispatch, selectedCat])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container bg-light p-4 rounded shadow-sm" style={{ paddingTop: '10px', paddingBottom: '20px' }}>

        {/* Back navigation to catelog */}
        <Link to="/"><AiOutlineLeft size={30} color='black' /></Link>

        {/* React Loading Skeleton */}
        {status === 'loading' ? (
          <BreedDetailsSkeleton />

        ) : status === 'failed' ? (  // If status Failed
          <ErrorComponent/>

        ) : (
          selectedCat && (
            <BreedDetails />
          )
        )}
      </div>
    </div>
  )
}

export default SingleBreedPage
