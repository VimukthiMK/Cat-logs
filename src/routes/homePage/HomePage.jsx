import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from 'src/components/searchBar/SearchBar' // Search bar
import ErrorComponent from 'src/components/errorComponent/ErrorComponent' // Error

const BreedList = lazy(() => import('src/components/breedList/BreedList'))

const HomePage = () => {
  const { status } = useSelector((state) => state.cats)

  return (
    <div className="container mb-4 p-4 rounded mt-lg-5 br-8 bg-light">
      {/* Heading */}
      <h1 className="mb-4 text-center">Cat Catalog</h1>

      {/* SearchBar */}
      <SearchBar />

      {/* Breed List with lazy loading */}
      <Suspense fallback={<p>Loading...</p>}>
        <BreedList />
      </Suspense>

      {/*// If status Failed */}
     {status === 'failed' && 
     <ErrorComponent/>}
    </div>
  )
}

export default HomePage
