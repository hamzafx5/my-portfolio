import { useState } from "react";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";

export default function Slider({ aspect = [16, 9], imagesUrls = [] }) {
	const [slideIndex, setSlideIndex] = useState(0);
	let [x, y] = aspect;
	function nextSlide() {
		setSlideIndex((prev) => {
			return prev < imagesUrls.length - 1 ? (prev += 1) : 0;
		});
	}
	function prevSlide() {
		setSlideIndex((prev) => {
			return prev <= 0 ? imagesUrls.length - 1 : (prev -= 1);
		});
	}
	return (
		<div
			style={{ aspectRatio: `${x}/${y}` }}
			className="group w-full rounded-lg bg-gray-50 dark:bg-gray-800  overflow-hidden relative "
		>
			<span
				onClick={nextSlide}
				className="inline-block md:cursor-pointer text-primary z-10 absolute right-[5%] top-1/2 -translate-y-1/2"
			>
				<CgChevronRightO size="30px" />
			</span>
			<span
				onClick={prevSlide}
				className="inline-block md:cursor-pointer text-primary z-10 absolute left-[5%] top-1/2 -translate-y-1/2"
			>
				<CgChevronLeftO size="30px" />
			</span>
			{imagesUrls.map((url, index) => {
				return (
					<img
						loading="lazy"
						key={index}
						style={{
							left: `${index * 100}%`,
							transform: `translateX(-${slideIndex * 100}%)`,
						}}
						className="w-full h-full object-cover absolute top-0 transition-transform duration-1000"
						src={url}
						alt="slide"
					/>
				);
			})}
			<div
				style={{ width: `${(100 / imagesUrls.length) * (slideIndex + 1)}%` }}
				className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 h-[2px] bg-primary z-10 transition-all duration-300"
			></div>
		</div>
	);
}
