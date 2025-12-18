export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Affiliated Institutions */}
        <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-center">Affiliated Institutions</h3>
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm">
              <img
                src="/images/institutions/umcu.jpg"
                alt="UMC Utrecht"
                className="w-full h-20 object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm">
              <img
                src="/images/institutions/wkz.jpg"
                alt="Wilhelmina Kinderziekenhuis"
                className="w-full h-20 object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm">
              <img
                src="/images/institutions/utrecht-university.jpg"
                alt="Utrecht University"
                className="w-full h-20 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Clinical Operations Research</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              University Medical Center Utrecht<br />
              University of Utrecht
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/research" className="hover:text-blue-600">Research</a></li>
              <li><a href="/team" className="hover:text-blue-600">Team</a></li>
              <li><a href="/publications" className="hover:text-blue-600">Publications</a></li>
              <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: contact@umcutrecht.nl
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Clinical Operations Research, UMC Utrecht. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
