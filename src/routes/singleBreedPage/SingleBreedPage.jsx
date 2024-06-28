  import { useEffect } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { useParams, Link } from 'react-router-dom';
  import { fetchCatById } from 'src/redux/cats/catActions';
  import BreedDetailsSkeleton from 'src/components/loadingSkeleton/BreedDetailsSkeleton';
  import BreedDetails from 'src/components/breedDetails/BreedDetails';
  import { AiOutlineLeft } from 'react-icons/ai';
  import ErrorComponent from 'src/components/errorComponent/ErrorComponent';

  const SingleBreedPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedCat, status } = useSelector((state) => state.cats);

    useEffect(() => {
      if (!selectedCat || selectedCat.id !== id) {
        dispatch(fetchCatById(id));
      }
    }, [id, dispatch, selectedCat]);

    return (
        <div className="container mb-4 p-4 rounded mt-lg-5 br-8 bg-light">
          {/* Back navigation to catalog */}
          <Link to="/">
            <AiOutlineLeft size={30} color="black" />
          </Link>

          {/* React Loading Skeleton or Error */}
          {status === 'loading' ? (
            <BreedDetailsSkeleton />
          ) : status === 'failed' ? (
            <ErrorComponent />
          ) : (
            selectedCat && <BreedDetails />
          )}
        </div>
    );
  };

  export default SingleBreedPage;
