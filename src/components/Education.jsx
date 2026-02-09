const education = [
  {
    degree: 'Integrated M.Tech in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology, Andhra Pradesh',
    period: '2022 – 2027',
    grade: 'CGPA: 9.3'
  },
  {
    degree: 'Intermediate (XII) – MPC',
    institution: 'Narayana Junior College',
    period: '2020 – 2022',
    grade: 'Percentage: 93%'
  },
  {
    degree: 'Class (X) - ICSE',
    institution: 'Simhapuri Public School',
    period: '2020',
    grade: 'Percentage: 92%'
  }
]

function EducationCard({ edu }) {
  return (
    <div className="p-4 sm:p-6 rounded-xl border bg-white">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div className="flex-1">
          <div className="text-base sm:text-lg font-semibold text-gray-900">{edu.degree}</div>
          <div className="mt-1 text-sm sm:text-base text-gray-700">{edu.institution}</div>
        </div>
        <div className="text-right">
          <div className="text-xs sm:text-sm text-gray-600">{edu.period}</div>
          <div className="mt-1 text-sm sm:text-base font-medium text-primary-700">{edu.grade}</div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
        <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
