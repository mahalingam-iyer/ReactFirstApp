var axios = require('axios');

function getUserInfo(username){
	var url = 'https://api.github.com/users/' + username;
	return axios.get(url);
}

var githubHelper = {
	getPlayerInfo:function(players){
		return axios.all(players.map(function(usrname){
			return getUserInfo(usrname);
		}))
	}
}
module.exports = githubHelper;