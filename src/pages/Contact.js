import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import Footer from '../components/Footer';

const Contact = () => {
	return (
		<div>
			<Hero hero="roomsHero">
			<Banner title="Contact US">
			<Link to="/" className="btn-primary">
			<p>New Road,Kathmandu</p>
			khajaghar@gmail.com,
			+977 9843410568
			</Link>
			</Banner>
		</Hero>
		<Footer />
		</div>
	)
}

export default Contact
