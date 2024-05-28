import MovieList from "./MovieList";
import GenresList from "./constant/GenresList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={item.id} className="p-8 px-4 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
