import { teamMembers } from "@/data/team";

export default function TeamPage() {
  const staffMembers = teamMembers.filter(member => member.category === 'staff' || !member.category);
  const students = teamMembers.filter(member => member.category === 'student');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Meet the talented researchers behind our work
      </p>

      {/* Staff Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Research Staff</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member) => (
          <div key={member.id} className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
            <div className="mb-4">
              {member.photo ? (
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  {member.initials}
                </div>
              )}
              <h2 className="text-2xl font-bold text-center">{member.name}</h2>
              <p className="text-center text-blue-600">{member.role}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>
            {member.funFact && (
              <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-yellow-700 dark:text-yellow-400">🎯 Fun Fact:</strong> {member.funFact}
                </p>
              </div>
            )}
            <div className="text-sm text-gray-500">
              <p><strong>Research Interests:</strong> {member.interests.join(", ")}</p>
              {member.pubmedUrl && (
                <p className="mt-2">
                  <a 
                    href={member.pubmedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    <strong>View Publications on PubMed →</strong>
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Students Section */}
      {students.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((member) => (
              <div key={member.id} className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
                <div className="mb-4">
                  {member.photo ? (
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                      <img
                        src={member.photo}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                      {member.initials}
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-center">{member.name}</h2>
                  <p className="text-center text-green-600">{member.role}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Research Interests:</strong> {member.interests.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
