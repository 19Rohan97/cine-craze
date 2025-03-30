import Bookmark from "./Bookmark";

export default function Box({ movie, onPopup }) {
  return (
    <article
      className="movie-item cursor-pointer"
      onClick={() => onPopup(movie.imdbID)}
    >
      <div className="movie-header relative rounded-lg overflow-hidden">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : `https://dummyimage.com/280x300/000/ffffff&text=${movie.Title}`
          }
          alt={movie.Title}
          className="movie-img h-full min-h-[200px] max-h-[200px] lg:max-h-[300px] lg:min-h-[300px] w-full object-cover"
        />
        <Bookmark />
      </div>
      <div className="movie-meta text-white flex gap-2 opacity-75 items-center mt-2 mb-1">
        <span className="movie-year">{movie.Year.split("–")[0]}</span>
        <img src="/assets/images/icon-divider.svg" alt="Movies" />
        <span className="movie-type flex gap-2 items-center capitalize">
          <img src="/assets/images/icon-category-movie.svg" alt="Movies" />
          {movie.Type}
        </span>
        <img src="/assets/images/icon-divider.svg" alt="Movies" />
        <span className="movie-rated">PG</span>
      </div>
      <h4 className="hxs font-medium text-white">{movie.Title}</h4>
      {/* <span className="text-white opacity-30">{movie.imdbID}</span> */}
    </article>
  );
}
