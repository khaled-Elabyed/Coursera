import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import courses from "./Courses"; // ✅ استيراد الكورسات مباشرة

const Header = () => {
  const cart = useSelector((state) => state.app.cart);
  const auth = getAuth();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("logout error: ", error);
      });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 relative bg-white z-50">
      <div className="flex justify-around items-center w-full max-w-screen-xl px-6">
        <Link to="/Home">
         <h1 className="w-[140px] p-1 md:w-[220px] text-center bg-[#6d28d2] rounded-lg shadow-lg text-white font-extrabold text-3xl">
          COURSERA
         </h1>
        </Link>
        <input
          className="border-2 border-[#6d28d2] rounded-md shadow-lg max-h-[30px] px-3 w-1/4 md:w-1/2 "
          type="search"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <div className="text-2xl text-[#6d28d2] flex gap-8 items-center">
          <Link to="/cart" className="relative text-2xl text-[#6d28d2]">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-white font-semibold text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* نتائج البحث */}
      {searchTerm && (
        <div className="bg-white shadow-md p-4 w-full max-w-screen-xl mt-2 rounded-md">
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((course) => (
                <li key={course.id} className="border-b pb-2">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 text-sm">No matching courses found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;




