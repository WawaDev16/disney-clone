const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        key={movie}
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110ps] md:w-[200px] rounded-lg hover:border-[3px] 
        border-gray-400 
        hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      />
    </>
  );
}

export default MovieCard;
