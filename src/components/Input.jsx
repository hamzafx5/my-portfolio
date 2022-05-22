import { useState } from "react";

export default function Input({ className, type = "text", placeholder, onFocus = null, onBlur = null, ...props }) {
	const [focus, setFocus] = useState(false);

	function handleFocus(event) {
		onFocus && onFocus(event);
		setFocus(true);
	}

	function handleBlur(event) {
		onBlur && onBlur(event);
		setFocus(false);
	}
	return (
		<div
			className={`w-full h-max relative mb-4 after:sudo after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:block after:z-10 after:transition-all after:duration-300 ${
				className && className
			} ${focus ? "after:scale-x-1 after:opacity-1" : "after:scale-x-0 after:opacity-0"}`}
		>
			<input
				className="block w-full px-2 border-b-2 bg-gray-50 h-[48px] dark:bg-gray-800 border-gray-200 outline-none dark:border-gray-700 "
				type={type}
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholder={focus ? "" : placeholder}
				{...props}
			/>
		</div>
	);
}

export function Textarea({ className, placeholder, onFocus = null, onBlur = null, ...props }) {
	const [focus, setFocus] = useState(false);
	function handleFocus(event) {
		onFocus && onFocus(event);
		setFocus(true);
	}

	function handleBlur(event) {
		onBlur && onBlur(event);
		setFocus(false);
	}
	return (
		<div
			className={`w-full h-max relative mb-4 after:sudo after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:block after:z-10 after:transition-all after:duration-300 ${
				className && className
			} ${focus ? "after:scale-x-1 after:opacity-1" : "after:scale-x-0 after:opacity-0"}`}
		>
			<textarea
				className="block w-full p-2 border-b-2 bg-gray-50 min-h-[200px] resize-y dark:bg-gray-800 border-gray-200 outline-none dark:border-gray-700 "
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholder={focus ? "" : placeholder}
				{...props}
			/>
		</div>
	);
}
