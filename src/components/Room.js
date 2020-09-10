import React from "react";
import {Link} from "react-router-dom";
import defaultImg from './../images/room-1.jpeg';
import PropTypes from "prop-types";

export default function Room({room}) {
	// console.log(room);
	const { name, slug, images, price, discount } = room;

	return (
		<article className="room">
			<div className="img-container">
				<img src={images[0] || defaultImg} alt="single room" />
				<div className="price-top">
					<h6>{discount}%</h6>
					<p>discount</p>
				</div>
				<Link to={`/restaurants/${slug}`} className="btn-primary room-link">
					Featured
				</Link>
			</div>
			<p className="room-info">{name}</p>
		</article>
	);
}

Room.prototype = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.string.isRequired
	})
};
