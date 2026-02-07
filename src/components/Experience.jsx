function Section({ title, children }) {
  return (
    <div className="mt-10">
      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Experience & Achievements</h2>

        <Section title="Research Publication">
          <div className="p-6 rounded-xl border bg-white">
            <div className="text-lg font-semibold">
              Deep Learning-Based Assisted Automated Skin Cancer Detection
            </div>
            <a
              href="https://www.linkedin.com/posts/kaipu-mahendra_researchpaper-academicconference-computerscience-activity-7424138488612319232-Cbvw"
              className="mt-2 inline-block text-primary-700"
              target="_blank"
              rel="noreferrer"
            >
              Publication Link
            </a>
            <div className="mt-4 text-gray-700">
              This research applies Deep Learning and CNNs for early detection of skin cancer via automated image analysis, focusing on accuracy, reliability, and real-world feasibility.
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold">Problem Statement</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Manual diagnosis is time-consuming</li>
                  <li>Accuracy varies by expertise</li>
                  <li>Large medical image datasets are hard to analyze</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Approach & Methodology</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>CNN-based deep learning models for lesion classification</li>
                  <li>Evaluation across multiple deep architectures</li>
                  <li>Preprocessing and feature extraction to boost performance</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold">Key Contributions</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Effective CNN use for medical image analysis</li>
                  <li>Improved reliability of automated detection</li>
                  <li>Practical deployment considerations in healthcare</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">What I Learned</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>End-to-end deep learning workflows</li>
                  <li>Research methodology and evaluation</li>
                  <li>Ethical and practical healthcare AI challenges</li>
                  <li>Translating research into real-world systems</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Web Development Internship — Csedge">
          <div className="p-6 rounded-xl border bg-white">
            <div className="text-lg font-semibold">
              Web Development Intern — Csedge
            </div>
            <a
              href="https://www.linkedin.com/posts/kaipu-mahendra_webdevelopment-internshipexperience-fullstackdevelopment-activity-7251872878688677889-bRDB"
              className="mt-2 inline-block text-primary-700"
              target="_blank"
              rel="noreferrer"
            >
              Internship Credential
            </a>
            <div className="mt-4 text-gray-700">
              Hands-on full-stack experience building real-world applications and production features; strengthened understanding of scalable systems, backend integration, and professional workflows.
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold">Responsibilities</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Developed and enhanced frontend components</li>
                  <li>Integrated REST APIs with UI</li>
                  <li>Implemented features and debugging</li>
                  <li>Followed industry-standard practices</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Skills Gained</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Practical full-stack development</li>
                  <li>REST API integration and data flow</li>
                  <li>Clean, maintainable code</li>
                  <li>Professional development environment</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Impact</div>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Contributed to production-ready features</li>
                  <li>Stronger understanding of software cycles</li>
                  <li>Improved problem-solving and debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Certifications & Achievements">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-white">
              <div className="text-lg font-semibold">Oracle Foundations of Artificial Intelligence</div>
              <a
                href="https://www.linkedin.com/posts/kaipu-mahendra_oracle-oci-artificialintelligence-activity-7368689053610758144-6SwT"
                className="mt-2 inline-block text-primary-700"
                target="_blank"
                rel="noreferrer"
              >
                Credential
              </a>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Core AI concepts and terminology</li>
                <li>Real-world AI applications</li>
                <li>Ethical considerations and enterprise use cases</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <div className="text-lg font-semibold">Oracle Generative AI Professional</div>
              <a
                href="https://www.linkedin.com/posts/kaipu-mahendra_oracle-generativeai-artificialintelligence-activity-7375418451005337600-R7NG"
                className="mt-2 inline-block text-primary-700"
                target="_blank"
                rel="noreferrer"
              >
                Credential
              </a>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Generative AI concepts and architectures</li>
                <li>Enterprise applications and practical use</li>
                <li>Understanding model behavior and limitations</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="NASA Space Apps Challenge — Participant">
          <div className="p-6 rounded-xl border bg-white">
            <div className="text-lg font-semibold">NASA Space Apps Challenge — Participant</div>
            <a
              href="https://www.linkedin.com/posts/kaipu-mahendra_spaceapps-nasa-hackathon-activity-7248910373993545728-hYlP"
              className="mt-2 inline-block text-primary-700"
              target="_blank"
              rel="noreferrer"
            >
              Post
            </a>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Collaborated using NASA open data</li>
              <li>Team-based rapid prototyping under deadlines</li>
              <li>Applied problem-solving on real-world challenges</li>
            </ul>
          </div>
        </Section>
      </div>
    </section>
  )
}
