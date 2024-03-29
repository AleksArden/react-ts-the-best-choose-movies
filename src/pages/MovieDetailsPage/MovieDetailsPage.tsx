import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchRequest } from 'services/Movies.services';
import {
  Wrapper,
  Poster,
  Content,
  Thumb,
  Button,
  List,
  Item,
  Error,
  Load,
  Div,
} from './MovieDetailsPage.styled';
import { IMAGE_URL } from 'constans/ImageURL';
import { STATUS } from 'constans/Status';
import imageReplace from 'assets/poster/poster-not-found.jpg';
import { DetailsMovie } from 'types/typeMovie';
import { FetchDetailsMovie } from 'types/typeFetchMovie';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState<DetailsMovie | null>(null);
  const [status, setStatus] = useState(STATUS.idle);

  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams<{ movieId?: string }>();

  useEffect(() => {
    const getMovieDetailsById = async (movieId?: string): Promise<void> => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchRequest<FetchDetailsMovie>({
          URL: `movie/${movieId}`,
        });
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getMovieDetailsById(movieId);
  }, [movieId]);
  const onResolve = (data: FetchDetailsMovie): void => {
    const dataMovie: DetailsMovie = {
      title: data.original_title,
      releaseDate: new Date(data.release_date).getFullYear(),
      overview: data.overview,
      genres: data.genres.map(item => item.name).join(' '),
      poster: data.poster_path,
      voteAverage: (data.vote_average * 10).toFixed(0),
    };
    setMovie(dataMovie);
    setStatus(STATUS.success);
  };
  return (
    <>
      {status === STATUS.error && <Error>NOT FOUND</Error>}
      {status === STATUS.loading && <Load>Loading...</Load>}
      {status === STATUS.success && movie && (
        <>
          <Button type="button" onClick={() => navigate(location?.state?.from)}>
            Go back
          </Button>
          <Wrapper>
            {movie.poster ? (
              <Poster
                src={`${IMAGE_URL}` + movie.poster}
                alt={`Poster ${movie.title}`}
              />
            ) : (
              <Poster src={imageReplace} />
            )}
            <Content>
              {movie.releaseDate ? (
                <h2>
                  {movie.title} ({movie.releaseDate})
                </h2>
              ) : (
                <h2>{movie.title}</h2>
              )}
              <p>User score {movie.voteAverage}%</p>
              <b>Overview AAAAAAAAAAAA</b>
              {movie.overview ? (
                <p>{movie.overview}</p>
              ) : (
                <p>Not information</p>
              )}
              <b>Genres</b>
              {movie.genres ? <p>{movie.genres}</p> : <p>Not information</p>}
            </Content>
          </Wrapper>
          <Thumb>
            <p>Additional information</p>
            <List>
              <Item>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </Item>
              <Item>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </Item>
            </List>
          </Thumb>
          <Suspense fallback={<Div>Loading...</Div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
