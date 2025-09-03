export default function Project({ title, description, image, github, demo, category }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Category Badge */}
      {category && (
        <span className="inline-block mb-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded">
          {category}
        </span>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      {/* Buttons */}
      <div className="flex space-x-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
