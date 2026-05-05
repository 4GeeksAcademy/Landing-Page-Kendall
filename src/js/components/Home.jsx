import React from "react";


import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	const cardImages = [
		{
			url: "https://images.unsplash.com/photo-1772289935157-f64bc178b47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
			title: "Grand Canon"
		},
        {
			url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
			title: "River"
		},
        {
			url: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
			title: "Blanc"
		},
        {
			url: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
			title: "Candies"
		},
		{
			url: "https://images.unsplash.com/photo-1777195680745-9fb67291b216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
			title: "Moon"
		}
	];
        
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<div className="container-fluid d-flex flex-column  mt-4 col-md-10">
				<Jumbotron/>
				<div className="container-fluid d-flex flex-wrap justify-space-between mt-4">
					{
						cardImages.map((img,index) => {
							return <Card key={index} url={img.url} title={img.title} />
						})
					}
				</div>
			</div>
			<Footer/>
		</div>
	)
};

export default Home;