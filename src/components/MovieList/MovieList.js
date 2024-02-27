import Movie from "./Movie/Movie";

function MovieList(props) {
  const Movies = props.Movies;
  return (
    <>
      {Movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </>
  );
}
export default MovieList;
