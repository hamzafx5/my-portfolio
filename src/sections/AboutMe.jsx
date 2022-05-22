import SectionTitle from "../components/SectionTitle";
import aboutImg from "../images/about.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<section className="mb-16" id="about-me">
			<SectionTitle title="About Me" />
			<div className="flex flex-col gap-6 lg:gap-8 md:flex-row items-center lg:justify-center ">
				<motion.img
					initial={{ opacity: 0, x: 10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring", duration: 1 }}
					className="rounded-md max-w-[300px] block"
					src={aboutImg}
					alt="Author"
				/>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					// viewport={{ once: false }}
					className="text-lg lg:basis-[50%]"
				>
					I'm <mark>Self Taught Web Developer</mark> With more than Two Years of experience I love Building
					Applications and Solving Problems I Started learning about The Web For Fun and After I fell in love
					with it, I decided that I wanted to be a Web Developer.
				</motion.p>
			</div>
		</section>
	);
}
