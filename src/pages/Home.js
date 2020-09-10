import React from "react";
import Hero from "./../components/Hero";
import Banner from "./../components/Banner";
import {Link} from "react-router-dom";
import Services from './../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Footer from "../components/Footer";

export const Home = () => {
	return (
		<>
		<Hero >
			<Banner title="Newari authentic food at your door step" subtitle="Order online, Lunch starting at Rs.150">
			<Link to='/restaurants' className="btn-primary">
				Our Special Menu
			</Link>
			</Banner>
		</Hero>
		{/* <Services /> */}
		<FeaturedRooms />
		<Footer />
		</> //react fragment
		
	)
}
