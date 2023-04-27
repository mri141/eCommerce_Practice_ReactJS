import { useEffect, useState } from "react";
import jsonData from "../../Data/data.json";
import CourseCard from "./CourseCard";

function Courses() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    setcourses(jsonData);
  }, []);

  return (
    <section className="py-20 bg-red-100">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center text-gray-800 mb-12">
          সময়োপযোগী প্রোগ্রামসমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {courses.length !== 0
            ? courses.map((course) => (
                <CourseCard
                  imageUrl={course.imageUrl}
                  courseName={course.name}
                  facilities={course.facilities}
                  key={course.id}
                />
              ))
            : "Loading!!"}
        </div>
      </div>
    </section>
  );
}

export default Courses;
