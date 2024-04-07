import React from "react";

//include images into your bundle
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import NavBarFooter from "./navbarFooter";

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
			<NavBarFooter />
		</div>
	);
};

export default Home;
