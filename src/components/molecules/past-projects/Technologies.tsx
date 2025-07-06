import React from "react";

const techCategories = [
  {
    title: "Frontend Technologies",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Technologies",
    technologies: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Redis"],
  },
];

export const Technologies = () => {
  return (
    <section className="py-20 md:py-32  bg-[#252525] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technologies We Excel In
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Our expertise spans across modern technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="bg-[#333131] p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#252525] px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
