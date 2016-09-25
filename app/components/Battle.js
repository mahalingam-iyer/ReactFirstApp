var React = require('react');
var githubHelper = require('../utils/githubHelpers');

var Battle = React.createClass({
	getInitialState:function(){
		return {
			isLoading:true,
			playersInfo:[]
		}
	},
	componentDidMount:function(){
		var q = this.props.location.query;
		githubHelper.getPlayerInfo([q.playerOne,q.playerTwo])
		.then(function(players){
			this.setState({
	          isLoading: false,
	          playersInfo: [players[1].data, players[1].data]
	        })
		}.bind(this));
	},
	getActualContent:function(){
		if(this.state.isLoading){
			return <div>Loading data...</div>
		}else{
			return <div className='col-sm-12'>
				<div className='col-sm-6'>
				<div>Player 1</div>
								<div><img src={this.state.playersInfo[0].avatar_url} /></div>
								<div>Name:<h4>{this.state.playersInfo[0].name}</h4></div>
								<div>Joined On:<h4>{this.state.playersInfo[0].created_at}</h4></div>
								<div>Followers:<h4>{this.state.playersInfo[0].followers}</h4></div>
								<div>No. of Repos:<h4>{this.state.playersInfo[0].public_repos}</h4></div>
			</div>
			 <div className='col-sm-6'>
				<div>Player 2</div>
								<div><img src={this.state.playersInfo[1].avatar_url} /></div>
								<div>Name:<h4>{this.state.playersInfo[1].name}</h4></div>
								<div>Joined On:<h4>{this.state.playersInfo[1].created_at}</h4></div>
								<div>Followers:<h4>{this.state.playersInfo[1].followers}</h4></div>
								<div>No. of Repos:<h4>{this.state.playersInfo[1].public_repos}</h4></div></div></div>
		}
	},
	render:function(){
		return(
			<div>
			<h1>Result</h1>
			<h2>{this.getActualContent()}</h2>
			</div>
		);
	}
});

module.exports = Battle;