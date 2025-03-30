import Button from "./Button";

export default function MovieList({ children, onNext, onPrev, page }) {
  return (
    <>
      <div className="movie-grid grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
        {children}
      </div>
      <div className="pagination w-100 flex items-center justify-center gap-2 mt-5">
        <Button onClick={onPrev}>Prev</Button>
        <span className="current-page text-white px-3 text-hxs leading-none">
          {page}
        </span>
        <Button onClick={onNext}>Next</Button>
      </div>
    </>
  );
}
