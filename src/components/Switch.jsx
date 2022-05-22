export default function Switch({ input }) {
	return (
		<label className="switch-btn">
			<input type="checkbox" {...input} />
			<span></span>
		</label>
	);
}
