import Container from "./components/Container";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Work from "./sections/Work";
import UpworkProfile from "./sections/UpworkProfile";
import Footer from "./sections/footer";

export default function App() {
	return (
		<>
			<Nav />
			<Container>
				<Hero />
				<AboutMe />
				<Skills />
				<Work />
			</Container>
			<UpworkProfile />
			<Container>
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
