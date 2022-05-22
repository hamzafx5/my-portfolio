import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Button({
	type = "primary",
	size = "md",
	block = false,
	children,
	className,
	loading,
	linkTag = false,
	...props
}) {
	let _classes = [];
	const types = {
		primary:
			"bg-primary border-primary text-white hover:shadow-sky-200 focus:shadow-sky-200 dark:hover:shadow-sky-900 dark:focus:shadow-sky-900",
		"primary-border":
			"bg-inherit border-primary text-primary hover:shadow-sky-200 focus:shadow-sky-200 dark:hover:shadow-sky-900 dark:focus:shadow-sky-900",
		secondary:
			"bg-secondary border-secondary text-white hover:shadow-sky-200 focus:shadow-sky-200 dark:hover:shadow-sky-900 dark:focus:shadow-sky-900",
		"secondary-border":
			"bg-inherit  border-secondary text-secondary hover:shadow-sky-200 focus:shadow-sky-200 dark:hover:shadow-sky-900 dark:focus:shadow-sky-900",
	};
	const sizes = {
		sm: "p-[8px_16px] text-[16px]",
		md: "p-[12px_20px] text-[18px]",
		lg: "p-[16px_24px] text-[20px]",
		xl: "p-[20px_28px] text-[22px]",
	};
	_classes.push(`relative text-center md:cursor-pointer overflow-hidden select-none border rounded-md outline-none
	leading-[1em] font-[600] transition-all duration-[350ms]
	hover:scale-[0.98] hover:shadow-[0_0_0_4px] focus:shadow-[0_0_0_3px]`);
	_classes.push(types[type]);
	_classes.push(sizes[size]);
	block && _classes.push("w-full");
	linkTag && _classes.push("inline-block");
	_classes && _classes.push(className);
	_classes = _classes.join(" ").trim().replace(/\n|\r/g, "");
	if (linkTag) {
		return (
			<a className={_classes} {...props}>
				{children}
			</a>
		);
	}
	return (
		<button className={_classes} {...props}>
			{children}
			{loading && (
				<span className="absolute z-10 top-0 left-0 w-full h-full bg-inherit text-inherit flex items-center justify-center">
					<AiOutlineLoading3Quarters size="26px" className="animate-spin" />
				</span>
			)}
		</button>
	);
}
