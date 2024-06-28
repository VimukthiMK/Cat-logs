import { useSelector } from 'react-redux'
import SearchBar from 'src/components/searchBar/SearchBar'
import BreedList from 'src/components/breedList/BreedList'

const HomePage = () => {
  const { status, error } = useSelector((state) => state.cats)

  return (
    <div className="container mt-5 mb-4">
      {/* Heading */}
      <h1 className="mb-4">Cat Catalog</h1>

      {/* SearchBar */}
      <SearchBar />

      {/* Breed List */}
      <BreedList />

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-danger">Error: {error}</p>}
    </div>
  )
}

export default HomePage
