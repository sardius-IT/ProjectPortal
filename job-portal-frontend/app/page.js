export default function HomePage() {
  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechSoft',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'CloudNet',
      location: 'Bangalore',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      location: 'Mumbai',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Find Your Dream Job</h1>
        <p className="mt-4 text-gray-600 text-lg">Explore thousands of opportunities across the best companies</p>
        <div className="mt-6">
          <a href="/auth/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </section>

      {/* Job Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded shadow hover:shadow-md">Technology</div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md">Design</div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md">Marketing</div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md">Sales</div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <a
                  href="/auth/login"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Ready to hire or get hired?</h2>
        <p className="mt-4 text-lg">Join thousands of employers and job seekers today.</p>
        <div className="mt-6 space-x-4">
          <a href="/auth/register" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
            Join Now
          </a>
          <a href="/auth/login" className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">
            Sign In
          </a>
        </div>
      </section>
    </div>
  )
}
