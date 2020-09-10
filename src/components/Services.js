import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state={
		services:[
			{
				icon: <FaCocktail />,
				title: "free cocktails",
				info: "This is cocktails"
			},
			{
				icon: <FaHiking />,
				title: "Endless Hiking",
				info: "Endless Hiking"
			},
			{
				icon: <FaShuttleVan />,
				title: "Free shuttle",
				info: "This is cocktails"
			},
			{
				icon: <FaBeer />,
				title: "Strongest Beer",
				info: "This is cocktails"
			}
		]
	}
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
				{this.state.services.map((item, index) =>{
					return <article key={index} className="service">
						<span>{item.icon}</span>
						<h6>{item.title}</h6>
						<p>{item.info}</p>
					</article>
				})}
				</div>
			</section>
		);
	}
}
