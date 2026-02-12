import React from "react";
import { Briefcase, Calendar, Code, GraduationCap } from "lucide-react";

/* ============================= */
/* Type Definition */
/* ============================= */

type ExperienceItem = {
  title: string;
  organization: string;
  description: string;
  date: string;
  icon: React.ElementType;
  skills: {
    name: string;
    color: string;
  }[];
};

/* ============================= */
/* Data */
/* ============================= */

const experiences: ExperienceItem[] = [
  {
    title: "Bachelors of Software Engineering",
    organization: "Addis Ababa University",
    description:
      "Fourth-year student actively building a strong foundation in software engineering principles. Committed to continuous learning and skill improvement to develop innovative software solutions.",
    date: "2022 - Present",
    icon: GraduationCap,
    skills: [
      { name: "Software Engineering", color: "bg-sky-500" },
      { name: "System Design", color: "bg-violet-500" },
    ],
  },

  {
    title: "A2SV (Africa to Silicon Valley)",
    organization: "DSA & Software Engineering",
    description:
      "Completed one year of intensive training in Data Structures, Algorithms, and Python. Currently continuing advanced independent study and practical problem solving.",
    date: "2023 - 2024",
    icon: Code,
    skills: [
      { name: "Python", color: "bg-blue-500" },
      { name: "DSA", color: "bg-green-500" },
      { name: "Problem Solving", color: "bg-purple-500" },
    ],
  },

  {
    title: "Internship Experience",
    organization: "Kuraz Technologies",
    description:
      "Gained practical industry experience working on real-world software solutions. Specialized in backend development using Laravel, building robust APIs and managing databases.",
    date: "2024",
    icon: Briefcase,
    skills: [
      { name: "PHP", color: "bg-indigo-500" },
      { name: "Laravel", color: "bg-red-500" },
      { name: "Backend", color: "bg-blue-500" },
    ],
  },

  {
    title: "Internship Experience",
    organization: "iCog Labs",
    description:
      "Gained practical industry experience working on real-world AI oriented software solutions.",
    date: "2025 - Present",
    icon: Briefcase,
    skills: [
      { name: "Python", color: "bg-indigo-500" },
      { name: "--", color: "bg-red-500" },
      { name: "AI", color: "bg-blue-500" },
    ],
  },
];

/* ============================= */
/* Reusable Card Component */
/* ============================= */

const ExperienceCard: React.FC<{ exp: ExperienceItem; isLeft: boolean }> = ({
  exp,
  isLeft,
}) => {
  const Icon = exp.icon;

  return (
    <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl hover:border-brand-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-900/20 relative">
      {/* Desktop Arrow Connector */}
      <div
        className={`hidden md:block absolute top-1/2 w-4 h-4 bg-slate-950 transform rotate-45 -translate-y-1/2 border-slate-800 group-hover:border-brand-500 transition-colors ${
          isLeft
            ? "-right-2 border-r border-t"
            : "-left-2 border-l border-b"
        }`}
      />

      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>

      <h5 className="text-brand-400 font-semibold mb-4">
        {exp.organization}
      </h5>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
        {exp.skills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs text-slate-300 rounded-md border border-slate-700"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${skill.color} mr-1.5`}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ============================= */
/* Main Component */
/* ============================= */

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(#8b5cf6 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-2">
            My Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Education & Experience
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-slate-800"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0;
            const Icon = exp.icon;

            return (
              <div key={index} className="relative z-10 mb-12 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                  
                  {/* LEFT SIDE */}
                  {!isLeft ? (
                    <>
                      {/* Date */}
                      <div className="order-1 md:w-5/12 text-left md:text-right pl-16 md:pl-0 md:pr-10 mb-2 md:mb-0">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-sm">
                          <Calendar className="w-3.5 h-3.5 mr-2 text-brand-400" />
                          {exp.date}
                        </span>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-[20px] md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-brand-600 border-4 border-slate-900 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="order-2 md:w-5/12 pl-16 md:pl-10 mt-2 md:mt-0">
                        <ExperienceCard exp={exp} isLeft={false} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content */}
                      <div className="order-2 md:order-1 md:w-5/12 pl-16 md:pl-0 md:pr-10 mt-2 md:mt-0">
                        <ExperienceCard exp={exp} isLeft={true} />
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-[20px] md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-brand-600 border-4 border-slate-900 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>

                      {/* Date */}
                      <div className="order-1 md:order-2 md:w-5/12 text-left pl-16 md:pl-10 mb-2 md:mb-0">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-sm">
                          <Calendar className="w-3.5 h-3.5 mr-2 text-brand-400" />
                          {exp.date}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
