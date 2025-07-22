export default function InputForm() {
  return (
    <form className="bg-white flex flex-column dark:bg-gray-900 p-6 rounded-lg shadow-md fixed bottom-0 left-0 right-0 max-w-4xl mx-auto">
      <a
        href="/write"
        className="text-center cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Submit Your Writing
      </a>
    </form>
  );
}
