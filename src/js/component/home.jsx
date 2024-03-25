import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
let components = [];
for (let i = 0; i < 4; i++) {
    components.push(
		<div key={i} className="col">
		  <Card />
		</div>
	  );
	}

const Home = () => {
	return (
	
		<div>
			<Navbar />
			<div className ="container">
				<Jumbotron />

				<div className="row">
				
					{components}
					
				</div>
	
			</div>
			
				<div class="card">
 				 <div class="card-footer">
					footer
				</div>
				</div>

		</div>
	);
};

export default Home;
