import { useEffect, useState } from "react";
import Bookmark from "./Bookmark";
import Loader from "./Loader";
import Button from "./Button";

const KEY = "59c25c3c";

export default function Modal({ onPopup, selectedID }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );

        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedID]
  );

  return (
    <div className="modal w-full h-full">
      <div className="bg-overlay size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="mt-14 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="flex flex-col bg-cc2 border border-cc4 shadow-2xs rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b border-cc3">
                <h3
                  id="hs-slide-up-animation-modal-label"
                  className="font-bold text-hm text-white"
                >
                  {movie.Title}
                </h3>
                <button
                  type="button"
                  onClick={onPopup}
                  className="hs-dropup-toggle size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-cc1 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : `https://dummyimage.com/280x300/000/ffffff&text=${movie.Title}`
                  }
                  alt={movie.Title}
                  className="movie-img h-full max-h-[400px] min-h-[300px] w-full object-cover"
                />
                <p className="my-4 text-white">{movie.Plot}</p>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-cc3">
                <Button onClick={onPopup}>Close</Button>
                <button
                  type="button"
                  className="py-2 px-5 leading-none font-semibold rounded border border-cc3 bg-cc3 text-white hover:bg-cc1 hover:border-cc1 focus:outline-hidden focus:bg-cc1"
                >
                  Add to List
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
