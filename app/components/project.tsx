export default function Projects({ projects }) {
  const formatDate = (date) => date ? date : '현재';

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="pl-6 pr-2 border-l-2 border-blue-200 mb-6">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {formatDate(project.startDate)} - {formatDate(project.endDate)}
            </p>
            <p className="text-sm text-gray-600 mb-2">{project.where}</p>
            <div className="flex flex-wrap gap-x-1 mb-4">
              {project.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  {skill}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside">
              {project.details.map((detail, index) => (
                <li key={index} className="text-sm text-gray-700 mb-1">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
