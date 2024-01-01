export default function Skill({ skills }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skillCategory, idx) => (
          <div key={idx} className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">{skillCategory.name}</h3>
            <ul className="list-none space-y-1">
              {skillCategory.list.map((skill, index) => (
                <li key={index} className="flex items-center">
                  {/* Assume icon.svg is an icon that represents the skill */}
                  <img src={`/icons/${skill.toLowerCase()}.png`} alt={skill} className="w-6 h-6 mr-2"/>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  