import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from './AppSlice';
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import courses from './Courses';

const CoursesList = () => {
  const [SelectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Categories = ['All', ...new Set(courses.map(course => course.category))];

  const handleaddtocart = (course, e) => {
    e.stopPropagation(); // لمنع التوجيه عند الضغط على زر السلة
    dispatch(addtocart(course));
  };

  const filteredCourses = SelectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === SelectedCategory);

  return (
    <div>
      {/* أزرار التصنيفات */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {Categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-sm ${
              SelectedCategory === category
                ? 'bg-purple-700 text-white'
                : 'bg-gray-400 text-white'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض الكورسات */}
      <div className="bg-gray-200 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCourses.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/course/${item.id}`)}
            className="cursor-pointer relative group bg-white min-h-[370px] p-4 m-2 shadow-xl rounded-md hover:shadow-2xl transition"
          >
            <img
              className="w-full h-[150px] object-cover rounded-md mb-3"
              src={item.img}
              alt={item.title}
            />
            <div className="flex flex-col gap-2 flex-grow">
              <h1 className="text-black font-semibold text-lg line-clamp-2">
                {item.title}
              </h1>
              <p className="text-slate-500 font-medium">{item.instructor}</p>
              <p className="text-slate-500 text-sm">{item.duration}</p>
              <p className="text-yellow-500 font-bold">⭐ {item.rate}</p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[#8b4309] font-semibold text-lg">
                  ${item.price}
                </span>
                <button
                  onClick={(e) => handleaddtocart(item, e)} // منع التنقل هنا فقط
                  className="hidden group-hover:flex bg-[#6d28d2] text-white text-sm px-3 py-1 rounded items-center gap-2 transition"
                >
                  إضافة للسلة <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
