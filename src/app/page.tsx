import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Clinical Operations Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            University Medical Center Utrecht • University of Utrecht
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Advancing healthcare through Conceptualization Theory: designing systems where humans and computers collaborate seamlessly via shared conceptual models
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/research" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl"
            >
              Our Research
            </Link>
            <Link 
              href="/publications" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition"
            >
              Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-900">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Research</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore our research on Conceptualization Theory and distributed intelligence in clinical operations.
            </p>
            <Link href="/research" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
              Learn more 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Videos</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Watch explanatory videos about our research and methodologies.
            </p>
            <Link href="/videos" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center">
              Watch now 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-900">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Blog</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Read the latest updates and insights from our research team.
            </p>
            <Link href="/blog" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
              Read more 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Affiliated Institutions */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Affiliations</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            We are proud to collaborate with leading institutions in healthcare and research
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <img
                src="/images/institutions/umcu.jpg"
                alt="UMC Utrecht"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">UMC Utrecht</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                University Medical Center Utrecht
              </p>
            </div>
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <img
                src="/images/institutions/wkz.jpg"
                alt="Wilhelmina Kinderziekenhuis"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">WKZ</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Wilhelmina Children's Hospital
              </p>
            </div>
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <img
                src="/images/institutions/utrecht-university.jpg"
                alt="Utrecht University"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Utrecht University</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Universiteit Utrecht
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
