import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Research Videos</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Explanatory videos about our research, methodologies, and findings
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700">
              {video.embedUrl ? (
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Video placeholder
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{video.description}</p>
              <p className="text-sm text-gray-500">Duration: {video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
