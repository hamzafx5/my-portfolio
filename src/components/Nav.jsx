import { useState, useEffect } from "react";
import { BiX, BiMenuAltRight } from "react-icons/bi";
import Switch from "./Switch";
import logo from "../images/logo-100.png";

export default function Nav() {
	const [openMenu, setOpenMenu] = useState(false);
	const [dark, setDark] = useState(() => {
		let theme = localStorage.theme;
		if (theme === "dark" || !theme) {
			return true;
		}
		return false;
	});

	useEffect(() => {
		localStorage.theme = dark ? "dark" : "light";
		document.documentElement.classList[dark ? "add" : "remove"]("dark");
	}, [dark]);
	return (
		<>
			<nav className="w-full h-16 bg-white dark:bg-gray-800  border-b border-gray-200 dark:border-gray-600">
				<div className="pl-4 pr-3 h-full flex items-center justify-between max-w-[1300px] mx-auto">
					<img className="w-10" src={logo} alt="logo" />
					<div
						onClick={() => setOpenMenu((prev) => !prev)}
						className="md:cursor-pointer p-1 hover:bg-black/25 rounded-full lg:hidden"
					>
						{openMenu ? <BiX size="35px" /> : <BiMenuAltRight size="35px" />}
					</div>
					<div
						className={`fixed lg:static lg:flex lg:gap-6 z-[99] lg:z-[unset] bg-gray-100 dark:bg-gray-800 lg:bg-transparent top-0 h-screen lg:h-auto lg:w-auto w-[230px] transition-all duration-[400ms] dark:border-gray-600 lg:border-none  ${
							openMenu ? "left-0 border-r border-gray-200" : "left-[-235px]"
						}`}
					>
						<div className="flex items-center justify-between p-3 lg:p-0 border-b lg:border-l lg:border-b-0 border-gray-200 dark:border-gray-600">
							<p className="text-sm inline-block lg:px-6">Switch to {dark ? "Light" : "Dark"}</p>
							<Switch
								input={{
									onChange: ({ target }) => setDark(target.checked),
									checked: dark,
								}}
							/>
						</div>
						<ul className="my-6 lg:m-0 lg:flex lg:-order-1">
							<LinkItem to="#about-me" label="About Me" closeMenu={() => setOpenMenu(false)} />
							<LinkItem to="#skills" label="Skills" closeMenu={() => setOpenMenu(false)} />
							<LinkItem to="#work" label="Work" closeMenu={() => setOpenMenu(false)} />
							<LinkItem to="#contact" label="Contact" closeMenu={() => setOpenMenu(false)} />
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

function LinkItem({ to, label, closeMenu }) {
	return (
		<li className="block">
			<a
				onClick={closeMenu}
				className="block p-3 hover:bg-gray-200 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 lg:hover:bg-gray-100 lg:border-none lg:hover:text-primary lg:rounded-md transition-colors duration-200"
				href={to}
			>
				{label}
			</a>
		</li>
	);
}
