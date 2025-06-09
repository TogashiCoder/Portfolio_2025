import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Core Technologies */}
      <div className="w-full flex flex-col items-center mb-8">
        <h3 className="text-white text-2xl font-semibold mb-6 text-center">
          Core Technologies
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center max-w-4xl">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Backend Technologies */}
      <div className="w-full flex flex-col items-center mb-8">
        <h3 className="text-white text-2xl font-semibold mb-6 text-center">
          Backend Development
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center max-w-4xl">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Frontend Technologies */}
      <div className="w-full flex flex-col items-center mb-8">
        <h3 className="text-white text-2xl font-semibold mb-6 text-center">
          Frontend Development
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center max-w-4xl">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Full-Stack Combinations */}
      {/* <div className="w-full flex flex-col items-center mb-8">
        <h3 className="text-white text-2xl font-semibold mb-6 text-center">
          Full-Stack Expertise
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center max-w-4xl">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div> */}

      {/* Additional Tools & Technologies */}
      <div className="w-full flex flex-col items-center mb-8">
        <h3 className="text-white text-2xl font-semibold mb-6 text-center">
          Tools & Databases
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center max-w-4xl">
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};