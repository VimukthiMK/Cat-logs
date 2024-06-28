import { useSelector } from 'react-redux'

const BreedDetails = () => {
  const { selectedCat } = useSelector((state) => state.cats)

  return (
    <>
      {selectedCat && (
        <>
          <div className="text-center">
            <h1 className='mb-4'>{selectedCat.name}</h1>
            <img
              src={selectedCat.image?.url}
              alt={selectedCat.name}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              className="img-fluid mb-3"
            />
          </div>
          <div>
            <p><strong>Origin:</strong> {selectedCat.origin}</p>
            <p><strong>Life Span:</strong> {selectedCat.life_span} years</p>
            <p><strong>Description:</strong></p>
            <p>{selectedCat.description}</p>
          </div>
        </>
      )}
    </>
  )}
export default BreedDetails