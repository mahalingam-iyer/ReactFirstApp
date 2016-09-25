var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home (){
	return(
		<div className="jumbotron col-sm-12 text-center">
			<h1>Git Hub Fight</h1>
			<p className="lead">Compare GitHub profile</p>
			<Link to="/PlayerOne">
				<button className="btn btn-primary">Go</button>
			</Link>
		</div>
	);
}

module.exports = Home;