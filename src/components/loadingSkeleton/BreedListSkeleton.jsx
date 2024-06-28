import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BreedListSkeleton = () => (
  <ul className="list-group">
    {Array(50)
      .fill()
      .map((_, index) => (
        <li key={index} className="list-group-item">
          <Skeleton height={20} />
        </li>
      ))}
  </ul>
)

export default BreedListSkeleton

