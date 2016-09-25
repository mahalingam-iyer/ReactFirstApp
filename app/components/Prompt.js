var React = require('react');
var Router = require('react-router');
var PropTypes = React.PropTypes;

var UserNameContainer = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},
	getInitialState:function(){
		return {
			username:''
		}
	},
	onFormSubmit:function(e){
		e.preventDefault();
		var username = this.state.username;
		if(this.props.routeParams.playerOner){
			this.context.router.push({
				pathname:'/battle',
				query:{
					playerOne:this.props.routeParams.playerOner,
					playerTwo:username
				}
			});
		}else{
			this.context.router.push('/PlayerTwo/'+username);
		}
	},
	textChange:function(e){
		this.setState({
			username:e.target.value
		});
	},
	render:function(){
		return (
			<div className='jumbotron col-sm-12 text-center'>
				<h1>{this.props.route.header}</h1>
				<div className='col-sm-12'>
					<form onSubmit={this.onFormSubmit}>
						<div className='form-group'>
							<input className='form-control' type='text' onChange={this.textChange} placeholder='GitHub Username' />
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
						    <button
						      className="btn btn-block btn-success"
						      type="submit">
						        Continue
						    </button>
						  </div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = UserNameContainer;