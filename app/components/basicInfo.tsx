export default function BasicInfo({ name, email, sites, aboutMe }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:flex md:items-start">
      <img src="/images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-sm text-gray-500 mb-4">{email}</p>

        <div className="flex space-x-4 mb-4">
          {sites.linkedin && (
            <a href={sites.linkedin} className="text-blue-500 hover:text-blue-700">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          )}
          {sites.github && (
            <a href={sites.github} className="text-gray-900 hover:text-gray-700">
              <img src="/icons/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
          )}
          {sites.blog && (
            <a href={sites.blog} className="text-green-500 hover:text-green-700">
              <img src="/icons/blog.png" alt="Blog" className="w-6 h-6" />
            </a>
          )}
        </div>

        <div className="text-gray-700">
          {/* <h2 className="text-lg font-semibold mb-2">About Me</h2> */}
          {aboutMe.map((item, index) => (
            <p key={index} className="mb-2">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
