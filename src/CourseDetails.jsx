import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './Courses'; // تأكد إن عندك البيانات هنا

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id.toString() === id);

  if (!course) {
    return <div className="text-center mt-10 text-red-500">الكورس غير موجود</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow p-6 mt-10 rounded-md">
      <img src={course.img} alt={course.title} className="w-full h-[300px] object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold text-purple-800 mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-1">المدرب: {course.instructor}</p>
      <p className="text-gray-600 mb-1">المدة: {course.duration}</p>
      <p className="text-yellow-500 font-semibold mb-3">⭐ {course.rate}</p>
      <p className="text-lg font-bold text-[#8b4309]">${course.price}</p>
      <p className="mt-4 text-gray-700">وصف تفصيلي للكورس يمكن إضافته هنا...</p>
    </div>
  );
};

export default CourseDetails;
