export default function NavItem({ icon }) {
  return (
    <li>
      <a href="/">
        <img src={`/assets/images/${icon}`} alt="Movies Nav" />
      </a>
    </li>
  );
}
