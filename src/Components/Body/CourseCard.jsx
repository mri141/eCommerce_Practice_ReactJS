function CourseCard({ imageUrl, courseName, facilities }) {
  return (
    <div className="p-4 rounded border bg-white">
      <img src={imageUrl} alt={courseName} />
      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-800 my-3 mb-5">
          {courseName}
        </h2>
        <ul className="list-disc ml-5">
          {facilities.map((facility) => (
            <li className="my-1" key={Math.random()}>
              {facility}
            </li>
          ))}
        </ul>
        <button className="py-3 px-5 bg-gray-800 text-white rounded block w-full mt-4">
          See Details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
