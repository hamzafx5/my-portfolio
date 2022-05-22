import { SiUpwork } from "react-icons/si";

import Button from "../components/Button";
import { motion } from "framer-motion";

export default function UpworkProfile() {
	return (
		<section className="py-16 w-full bg-gradient-to-r from-third to-secondary flex flex-col items-center text-center mb-16 p-4">
			<SiUpwork color="#14a800" size="100px" />
			<motion.h2
				initial={{ opacity: 0, y: 5 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="my-7 text-white"
			>
				Checkout My Profile on Upwork
			</motion.h2>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="inline-block"
			>
				<Button
					linkTag={true}
					target="blink"
					href="https://www.upwork.com/freelancers/~01e15cc7dcbe9cb973"
					className="bg-[#14a800] "
				>
					Take a Look
				</Button>
			</motion.div>
		</section>
	);
}
