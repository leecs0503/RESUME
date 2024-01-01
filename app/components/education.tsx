export default function Education({ school, degree, fieldOfStudy, startDate, endDate }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="flex items-center">
        <img src="images/school.png" alt={`${school} logo`} className="w-20 h-20 ml-6 mr-7  pr-2" />
        <div>
          <h3 className="text-xl font-bold mb-2">{school}</h3>
          <div className="text-gray-600 text-sm mb-2">
            {startDate} - {endDate}
          </div>
          <div className="text-lg mb-2">{fieldOfStudy}</div>
          <div className="text-gray-600 text-sm">GPA: {degree}</div>
        </div>
      </div>
    </div>
  );
}
