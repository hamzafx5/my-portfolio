import { motion } from "framer-motion";

export default function SectionTitle({ title }) {
	return (
		<motion.h2
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="inline-block relative after:sudo after:w-[clamp(100px,10vw,200px)] after:h-[2px] after:bg-current after:opacity-50  after:top-1/2 after:left-[118%] mb-[1em]"
		>
			{title}
		</motion.h2>
	);
}
