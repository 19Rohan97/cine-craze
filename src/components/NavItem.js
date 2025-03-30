export default function NavItem({ icon }) {
  return (
    <li>
      <a href="/">
        <img src={`/cine-craze/assets/images/${icon}`} alt="Movies Nav" />
      </a>
    </li>
  );
}
