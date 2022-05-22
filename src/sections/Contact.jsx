import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Input, { Textarea } from "../components/Input";
import Button from "../components/Button";
import { MdSend } from "react-icons/md";

export default function Contact() {
	const [loading, setLoading] = useState(false);
	const [contact, setContact] = useState({
		email: "",
		name: "",
		message: "",
	});

	function handleChange({ target: { name, value } }) {
		setContact((prev) => {
			return { ...prev, [name]: value };
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		fetch("https://formsubmit.co/ajax/1ebe638931bef19dd82255af35c115bc", {
			method: "POST",
			body: JSON.stringify(contact),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((r) => r.json())
			.then(() => {
				setLoading(false);
				setContact({ email: "", name: "", message: "" });
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}
	return (
		<section className="mb-16" id="contact">
			<SectionTitle title="Contact Me" />
			<form className="max-w-[700px] mx-auto" onSubmit={handleSubmit}>
				<Input
					type="email"
					name="email"
					onChange={handleChange}
					value={contact.email}
					placeholder="Enter You Email"
					required={true}
				/>
				<Input
					type="text"
					name="name"
					onChange={handleChange}
					value={contact.name}
					placeholder="Name"
					required={true}
				/>
				<Textarea
					placeholder="Message"
					name="message"
					onChange={handleChange}
					value={contact.message}
					required={true}
				/>
				<Button className="block ml-auto px-6" loading={loading}>
					<MdSend size="26px" />
				</Button>
			</form>
		</section>
	);
}
