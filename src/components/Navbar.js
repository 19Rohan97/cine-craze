import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar flex gap-6 lg:flex-col lg:gap-10 justify-center items-center">
        <NavItem icon="icon-nav-home.svg" />
        <NavItem icon="icon-nav-movies.svg" />
        <NavItem icon="icon-nav-tv-series.svg" />
        <NavItem icon="icon-nav-bookmark.svg" />
      </ul>
    </nav>
  );
}
