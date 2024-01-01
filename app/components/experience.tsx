export default function Experience({ experiences }) {
  const formatDate = (date) => date ? date : '현재';

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <div className="relative border-l-2 border-gray-300">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-8 ml-8">
            <div className="absolute -left-2.5 mt-1 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
            <h3 className="text-lg font-semibold">{exp.companyName} - {exp.position}</h3>
            <p className="text-sm text-gray-600">
              {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
            </p>
            <ul className="list-disc pl-6 mt-2">
              {exp.responsibilities.map((item, index) => (
                <li key={index} className="text-sm text-gray-700 mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
