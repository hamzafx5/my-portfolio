import Button from "./Button";
import Slider from "../components/Slider";

export default function Card({ imagesUrls, title, link, sourceCode, technologies }) {
	return (
		<div className="bg-white dark:bg-gray-800 shadow-[0_2px_6px_#D5D5D5] dark:shadow-none rounded-lg">
			{typeof imagesUrls === "string" ? (
				<img loading="lazy" src={imagesUrls} alt="slide" />
			) : (
				<Slider imagesUrls={imagesUrls} />
			)}
			<div className="p-4">
				<h3 className="mb-3 capitalize">{title}</h3>
				<label className="mb-2 block text-gray-700 dark:text-gray-400">Technologies</label>
				<div className="flex items-center gap-3 mb-6">{technologies}</div>
				<div style={{ gridGap: "1rem" }} className="grid grid-cols-2">
					<Button type="secondary-border" linkTag={true} href={sourceCode} target="blink">
						Code
					</Button>
					<Button linkTag={true} href={link} target="blink">
						Preview
					</Button>
				</div>
			</div>
		</div>
	);
}
