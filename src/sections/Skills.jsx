import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiBootstrap, DiSass } from "react-icons/di";
import {
	SiTailwindcss,
	SiNodedotjs,
	SiExpress,
	SiMysql,
	SiMongodb,
	SiTypescript,
	SiGithub,
	SiVite,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function Skills() {
	return (
		<section className="mb-16" id="skills">
			<SectionTitle title="Skills" />
			<div className="flex flex-col lg:flex-row gap-5 lg:gap-6 lg:flex-wrap w-full">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="bg-white rounded-md shadow-[0_2px_6px_#DDD] dark:shadow-none p-4 dark:bg-gray-800 lg:basis-[calc(50%-0.75rem)]"
				>
					<h3 className="text-xl font-medium">Frontend</h3>
					<div
						className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4"
						style={{ gridGap: "1rem" }}
					>
						<SkillBox label="HTML5" icon={<DiHtml5 size="50px" color="#ff0000" />} />
						<SkillBox label="CSS3" icon={<DiCss3 size="50px" color="#2965f1 " />} />
						<SkillBox label="JavaScript" icon={<DiJsBadge size="50px" color="#F0DB4F" />} />
						<SkillBox label="TypeScript" icon={<SiTypescript size="50px" color="#007acc " />} />
						<SkillBox label="React" icon={<DiReact size="50px" color="#61dbfb" />} />
						<SkillBox label="Sass" icon={<DiSass size="50px" color="#CD6799" />} />
						<SkillBox label="Tailwindcss" icon={<SiTailwindcss size="50px" color="#38bdf8" />} />
						<SkillBox label="Bootstrap" icon={<DiBootstrap size="50px" color="#7910f2" />} />
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="bg-white rounded-md shadow-[0_2px_6px_#DDD] dark:shadow-none p-4 dark:bg-gray-800 lg:basis-[calc(50%-0.75rem)]"
				>
					<h3 className="text-xl font-medium">Backend</h3>
					<div
						className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4"
						style={{ gridGap: "1rem" }}
					>
						<SkillBox label="Nodejs" icon={<SiNodedotjs size="50px" color="#68a063" />} />
						<SkillBox label="Express" icon={<SiExpress size="50px" color="#000" />} />
						<SkillBox label="Mysql" icon={<SiMysql size="50px" color="#00758f" />} />
						<SkillBox label="MongoDB" icon={<SiMongodb size="50px" color="#4DB33D" />} />
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="bg-white rounded-md shadow-[0_2px_6px_#DDD] dark:shadow-none p-4 dark:bg-gray-800 lg:basis-[calc(50%-0.75rem)]"
				>
					<h3 className="text-xl font-medium">General</h3>
					<div
						className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 "
						style={{ gridGap: "1rem" }}
					>
						<SkillBox label="Git" icon={<FaGitAlt size="50px" color="#f34f29 " />} />
						<SkillBox label="Github" icon={<SiGithub size="50px" color="#333" />} />
						<SkillBox label="Vite" icon={<SiVite size="50px" color="#6991f7" />} />
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function SkillBox({ label, icon }) {
	return (
		<div className="bg-white shadow-[0_1px_4px_1px_#EEE] dark:shadow-none dark:bg-gray-700 flex p-2 md:p-3 lg:p-4 rounded-md aspect-square flex-col gap-2 justify-between items-center">
			{icon}
			<label className="text-xs">{label}</label>
		</div>
	);
}
