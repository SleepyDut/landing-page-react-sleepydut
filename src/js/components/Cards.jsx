import React from "react";

//create your first component

const Cards = () => {
	let estilo = {width: "18rem"}
	return (
		<div className="card mb-5" style={estilo}>
			<div className="card-body text-center">
				<img src="https://placehold.co/500x325/png" className="card-img-top" alt="..."></img>
				<h5 className="card-title mt-2">Card title</h5>
				<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">Find out more!</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
