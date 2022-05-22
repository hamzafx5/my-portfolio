import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiBootstrap, DiSass, DiGulp } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import project1img1 from "../images/projects/project-1/page-1.png";
import project1img2 from "../images/projects/project-1/page-2.png";
import project1img3 from "../images/projects/project-1/page-3.png";
import project1img4 from "../images/projects/project-1/page-4.png";
import project1img5 from "../images/projects/project-1/page-5.png";
import project1img6 from "../images/projects/project-1/page-6.png";
// Project 2
import project2img1 from "../images/projects/project-2/page-1.png";
import project2img2 from "../images/projects/project-2/page-2.png";
import project2img3 from "../images/projects/project-2/page-3.png";
import project2img4 from "../images/projects/project-2/page-4.png";
// Project 3
import project3img1 from "../images/projects/project-3/page-1.png";
import project3img2 from "../images/projects/project-3/page-2.png";

import { motion } from "framer-motion";

export default function Work() {
	const iconSize = "25px";
	return (
		<section className="mb-16" id="work">
			<SectionTitle title="Work" />
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				style={{ gridGap: "1.5rem" }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			>
				<Card
					title="e-commerce website for fruit store"
					imagesUrls={[project1img1, project1img2, project1img3, project1img4, project1img5, project1img6]}
					technologies={[
						<DiHtml5 key={1} size={iconSize} color="#ff0000" />,
						<DiCss3 key={2} size={iconSize} color="#2965f1 " />,
						<DiJsBadge key={3} size={iconSize} color="#F0DB4F" />,
						<DiSass key={4} size={iconSize} color="#CD6799" />,
						<DiBootstrap key={5} size={iconSize} color="#7910f2" />,
						<DiGulp key={6} size={iconSize} color="#DB4446" />,
					]}
					link="https://project-progress-2022.netlify.app/"
					sourceCode="https://github.com/hamzafx5/figma-to-html"
				/>
				<Card
					title="Landing Page data storage Compony"
					imagesUrls={[project2img1, project2img2, project2img3, project2img4]}
					technologies={[
						<DiHtml5 key={1} size={iconSize} color="#ff0000" />,
						<SiTailwindcss key={2} size={iconSize} color="#38bdf8" />,
						<DiJsBadge key={3} size={iconSize} color="#F0DB4F" />,
					]}
					link="https://datawherehouse.netlify.app/"
					sourceCode="https://github.com/hamzafx5/datawarehouse"
				/>
				<Card
					title="Landing Page for Mail service Compony"
					imagesUrls={[project3img1, project3img2]}
					technologies={[
						<DiReact key={1} size={iconSize} color="#61dbfb" />,
						<DiSass key={2} size={iconSize} color="#CD6799" />,
					]}
					link="https://ninja-mail.netlify.app/"
					sourceCode="https://github.com/hamzafx5/NinjaMailLandingPage"
				/>
			</motion.div>
		</section>
	);
}
