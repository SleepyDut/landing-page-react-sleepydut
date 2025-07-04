import React from "react";

// create your first component
const Welcome = () => {
	return(
	<div class="p-5 mb-4 bg-body-tertiary bg-light rounded-3"> 
		<div class="container py-5"> <h1 class="display-5 fw-bold">A Warm Welcome!</h1> 
			<p class="col-md-8 fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint corrupti iure molestiae aut totam sapiente tempore. Pariatur doloremque nihil similique aut minima. Praesentium ducimus assumenda iure minus libero. Hic!</p> 
			<button class="btn btn-primary btn-lg" type="button">Call to Action!</button> 
		</div> 
	</div>
	)
}

export default Welcome;
