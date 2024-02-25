import Movie from "./Movie/Movie";
function MovieList(props) {
  const data = props.data;
  return (
    <>
      {data.map((e) => {
        return (
          <Movie
            key={e.id}
            data = {e}
          />
        );
      })}
    </>
  );
}
export default MovieList;
