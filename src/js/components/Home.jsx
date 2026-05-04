import React from "react";


import { Navbar, Jumbotron, Card, Footer } from "./content";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<div className="container-fluid d-flex flex-column justify-content-center gap-4 mt-4">
				<Jumbotron/>
				<div className="container-fluid d-flex flex-wrap justify-content-center gap-4">
					<Card imageId={1}/>
					<Card imageId={2}/>
					<Card imageId={3}/>
					<Card imageId={4}/>
				</div>
			</div>
			<Footer/>
		</div>
	)
};

export default Home;