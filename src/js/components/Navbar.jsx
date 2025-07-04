import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg pt-0 ">
			<div className="container-fluid bg-secondary ">
				<a className="navbar-brand text-light fw-bold " href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav d-flex justify-content-end text-light me-5">
						<a className="nav-link active text-light fw-bold" aria-current="page" href="#">Home</a>
						<a className="nav-link text-light" href="#">About</a>
						<a className="nav-link text-light" href="#">Services</a>
						<a className="nav-link text-light" href="#">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
