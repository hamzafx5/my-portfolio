import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="bg-gray-100 dark:bg-gray-800 py-8">
			<div className="flex items-center justify-center gap-4">
				<a href="https://twitter.com/1HamzaAmri" className="inline-block p-2 hover:bg-black/10 rounded-full">
					<BsTwitter size="26px" color="#00acee" />
				</a>
				<a
					href="https://www.linkedin.com/in/hamza-bouchgara-1a551523b/"
					className="inline-block p-2 hover:bg-black/10 rounded-full"
				>
					<BsLinkedin size="26px" color="#0072b1" />
				</a>
				<a
					href="https://github.com/hamzafx5https://github.com/hamzafx5"
					className="inline-block p-2 hover:bg-black/10 rounded-full"
				>
					<BsGithub size="26px" color="#161b22" />
				</a>
				<a
					href="https://www.upwork.com/freelancers/~01e15cc7dcbe9cb973"
					className="inline-block p-2 hover:bg-black/10 rounded-full"
				>
					<SiUpwork size="26px" color="#14a800" />
				</a>
			</div>
		</footer>
	);
}
