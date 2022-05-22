import { motion } from "framer-motion";

export default function Hero() {
	let title = [..."I'm Hamza Frontend Web Developer"];
	function rInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function rHsl() {
		return `hsl(${rInt(0, 360)}, ${rInt(50, 70)}%, ${rInt(40, 60)}%)`;
	}

	function generate3dShadow(clr) {
		let shadowVal = "";
		for (let i = 0.5; i < 5; i += 0.5) {
			shadowVal += ` ${i}px ${i}px 0 ${clr},`;
		}
		return shadowVal.substring(0, shadowVal.length - 1);
	}

	const variants = {
		hidden: {
			opacity: 0,
			y: -8,
			scale: 0.5,
		},
		visible: (i) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: i * 0.01,
				duration: 0.3,
				ease: "easeInOut",
			},
		}),
	};

	return (
		<section className="py-40">
			<h1 className="text-[12vw] xl:text-[10vw] cursor-default">
				{title.map((letter, i) => {
					if (letter === " ") {
						return " ";
					}
					return (
						<motion.span
							initial="hidden"
							animate="visible"
							variants={variants}
							whileHover={{ scale: 1.1, y: -20, rotate: [0, 2, 0, 0, -10, 0] }}
							custom={i}
							key={i}
							style={{
								color: rHsl(),
								textShadow: generate3dShadow("#BBB"),
								display: "inline-block",
							}}
						>
							{letter}
						</motion.span>
					);
				})}
			</h1>
		</section>
	);
}
