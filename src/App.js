import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const KEY = "59c25c3c";

export default function App() {
  const [query, setQuery] = useState("one piece");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [popup, setPopup] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleNext() {
    setPage((page) => page + 1);
  }

  function handlePrev() {
    if (page !== 1) {
      setPage((page) => page - 1);
    }
  }

  function handlePopup(id) {
    setPopup((popup) => !popup);
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);

          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}&page=${page}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching Movies");

          const data = await res.json();

          setMovies(data.Search);

          if (data.Response === "False") {
            throw new Error("Movie not Found");
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovies();
    },
    [query, page]
  );

  return (
    <main className="w-full lg:p-8">
      <Header />

      <section className="w-full p-4 lg:p-0 lg:max-w-[calc(100%-96px-36px)] lg:ms-auto lg:mb-9 mt-8">
        <div className="container mx-auto">
          <Search query={query} setQuery={setQuery} />
        </div>
      </section>

      <section className="w-full p-4 lg:p-0 lg:max-w-[calc(100%-96px-36px)] lg:ms-auto">
        <div className="container mx-auto">
          <h2 className="text-hl mb-8 text-white">Recommended for you</h2>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList onNext={handleNext} onPrev={handlePrev} page={page}>
              {movies.map((movie) => (
                <Box movie={movie} key={movie.imdbID} onPopup={handlePopup} />
              ))}
            </MovieList>
          )}
          {error && query !== "" && <ErrorMessage message={error} />}
          {error && query === "" && (
            <ErrorMessage message="Enter a valid keyword in the Search Box above" />
          )}
        </div>
      </section>

      {popup && <Modal onPopup={handlePopup} selectedID={selectedID} />}
    </main>
  );
}
