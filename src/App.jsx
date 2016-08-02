  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, IndexRoute, browserHistory } from 'react-router';
  import LandingPage from './LandingPage.jsx';
  import RoomFinder from './RoomFinder.jsx';
  import NoMatch from './NoMatch.jsx';

  class App extends Component {
    render() {
      return (
        <div>
          <h3>Your App Goes Here App</h3>
        </div>  
      );
    }
  }

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage} />
      <Route path="rooms" component={RoomFinder} />
      <Route path="home" component={App} />
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  )
  
     /*     <IndexRoute path="welcome" component={LandingPage} />
        <Route path="welcome" component={LandingPage} />
        <Route path="rooms" component={RoomFinder} />
*/



