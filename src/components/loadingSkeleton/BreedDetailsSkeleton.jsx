import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const BreedDetailsSkeleton = () => (
  <>
    <div className="mb-3 text-center">
      <Skeleton height={30} width={300} className="mx-auto" />
    </div>
    <div className="mb-3 text-center">
      <Skeleton height={300} width={300} className="mx-auto" />
    </div>
    <Skeleton count={3} />
  </>
)

export default BreedDetailsSkeleton
