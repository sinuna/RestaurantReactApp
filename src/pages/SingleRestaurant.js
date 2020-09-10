import React, { Component } from "react";
// import defaultBcg from './../images/room-1.jpeg';
import defaultBcg from './../images/Restaurant/restaurant1.jpeg';

import Hero from './../components/Hero';
import Banner from './../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from './../context';
import StyledHero from './../components/StyledHero';
import Footer from "../components/Footer";

export default class SingleRestaurant extends Component {
	constructor(props){
		super(props)
		// console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		}
	}

	static contextType = RoomContext;

	// componentDidMount(){}

	render() {
		const {getRoom} = this.context;
		const room = getRoom(this.state.slug);
		if(!room){
			return (
			<div className="error">
				<h3>No such room could be found...</h3>
				<Link to="/restaurants" className="btn-primary">
					Back to Restaurants
				</Link>
			</div>
			);
		}
		// console.log(room);
		const {
			name, 
			description, 
			capacity, 
			address, 
			discount,
			extras, 
			breakfast, 
			pets, 
			images
		} = room;

		const [mainImg,...defaultImg] = images
		// console.log(defaultImg);

		return (
		<>
		<StyledHero img={mainImg || this.state.defaultBcg}>
			<Banner title={`${name} restaurant`}>
				<Link to="/restaurants" className="btn-primary">
					Back to restaurants
				</Link>
			</Banner>
		</StyledHero>
		<section className="single-room">
			<div className="single-room-images">
			{defaultImg.map((item, index)=>{
				return <img key={index} src={item} alt={name}/>
			})}
			</div>
		<div className="single-room-info">
			<article className="desc">
				<h3>details</h3>
				<p>{description}</p>
			</article>

			<article className="info">
				<h3>Info</h3>
				<h6>Address: {address}</h6>
				<h6>Special Discount: {discount}%</h6>
				{/* <h6>
					max capacity : {" "} {capacity > 1 ? `${capacity} people` : `${capacity} person`}
				</h6> */}
				{/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6> */}
				{/* <h6>{breakfast && "free breakfast included"}</h6> */}

			</article>
			</div>	
		</section>
		<section className="room-extras">
			<h6>extras</h6>
			<ul className="extras">
				{extras.map((item, index)=>{
					return <li key={index}>- {item} </li>
				})}
			</ul>
		</section>
		<Footer />
		</> //react fragment
		);
	}
}

