export default function Search({ query, setQuery }) {
  return (
    <div className="search-movie flex items-start gap-6">
      <img
        src="/cine-craze/assets/images/icon-search.svg"
        alt="Search"
        className="w-8 h-8"
      />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-transparent w-full outline-0 focus:border-b-2 pb-[15px] text-white border-cc3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
