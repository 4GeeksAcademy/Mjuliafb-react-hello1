import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar"
import { Content } from "./Content";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Content />
			<Footer/>
		</>
	);
};

export default Home;
