import { Link } from "react-router-dom"


export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <h1 className="text-5xl font-bold text-indigo-700 mb-6">Welcome to Food Menu</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl text-center">
        A simple app to browse delicious food options.
      </p>
      <Link to={"/about"}

        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:scale-105"
      >
        Learn More →
      </Link>
    </div>
  )
}