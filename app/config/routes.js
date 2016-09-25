var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var UserNameContainer = require('../components/Prompt');
var BattleContainer = require('../components/Battle');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={UserNameContainer} />
      <Route path='playerTwo/:playerOner' header='Player Two' component={UserNameContainer} />
      <Route path='battle' component={BattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;