export default function ErrorMessage({ message }) {
  return (
    <h1 className="error text-3xl text-white">
      <span>⛔</span> {message}
    </h1>
  );
}
