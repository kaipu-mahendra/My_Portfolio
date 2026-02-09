const skills = {
  frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  backend: ['Spring Boot', 'Flask', 'REST APIs'],
  databases: ['MySQL', 'MongoDB'],
  ai: ['Machine Learning', 'Deep Learning', 'CNNs', 'Model Integration'],
  programming: ['Java', 'Python', 'DSA', 'LeetCode'],
  tools: ['Git', 'GitHub', 'Postman', 'Render', 'Vercel', 'Docker (basic)']
}

function Card({ title, items }) {
  return (
    <div className="p-4 sm:p-5 rounded-xl border bg-white">
      <div className="font-semibold text-sm sm:text-base">{title}</div>
      <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="px-3 py-1 text-sm rounded bg-gray-100">
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold">Technical Skills</h2>
        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card title="Frontend" items={skills.frontend} />
          <Card title="Backend" items={skills.backend} />
          <Card title="Databases" items={skills.databases} />
          <Card title="AI / ML / DL" items={skills.ai} />
          <Card title="Programming & DSA" items={skills.programming} />
          <Card title="Tools & Platforms" items={skills.tools} />
        </div>
      </div>
    </section>
  )
}
