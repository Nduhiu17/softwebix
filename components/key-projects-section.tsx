const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Complete online shopping solution with payment integration and inventory management for retail businesses.",
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive patient management system with appointment scheduling and medical records integration.",
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with advanced reporting and data visualization capabilities.",
  },
]

export function KeyProjectsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Key Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-3xl border-t-4 border-l-4 border-r-8 border-b-8 border-black p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
