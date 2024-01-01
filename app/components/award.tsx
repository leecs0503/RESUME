export default function Award({ awards }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Awards</h2>
      <div className="flex flex-wrap -mx-2">
        {awards.map((award, idx) => (
          <div key={idx} className="flex flex-col w-full md:w-1/2 px-2 mb-6">
            <div className="border-l-2 border-grey-100 pl-4">
              <span className="text-lg">{award.title}</span>
              <div className="font-bold">
                {award.year} - {award.prize}
                {award.link && (
                  <a href={award.link} className="text-blue-600 hover:text-blue-800 hover:underline text-sm ml-2" target="_blank" rel="noopener noreferrer">
                    (link)
                  </a>
                )}
              </div>
              {award.teamName && <div className="text-sm text-gray-500">Team: {award.teamName}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
