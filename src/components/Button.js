export default function Button({ children, onClick }) {
  return (
    <button
      className="border border-cc1 bg-cc1 hover:bg-transparent transition-all duration-300 text-white font-semibold rounded leading-none py-2 px-5"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
