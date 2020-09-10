import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import Footer from '../components/Footer';

export const Restaurants = () => {
	return (
		<>
		<Hero hero="roomsHero">
			<Banner title="our Menu">
			<Link to="/" className="btn-primary">
				return home
			</Link>
			</Banner>
		</Hero>
		<RoomContainer />
		<Footer />
		</>

	)
}
