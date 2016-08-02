  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
  import LandingPage from './LandingPage.jsx';
  import RoomFinder from './RoomFinder.jsx';
  import NoMatch from './NoMatch.jsx';
  import globalStyles from './assets/styles/global.css';

  var appContainer = {
    width:'800px',
    height:'525px',
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor:'#7edda3',
    backgroundImage:'url("http://i287.photobucket.com/albums/ll139/vmsg/Abstract%20sigs/abstract-waves-byvanesinger.png")', 
    opacity: .8,
    border: '3px solid #333',
    borderRadius: '5px',
  }

  var noteHolder ={
    width:'650px',
    height: '400px',
    backgroundColor:'whitesmoke',
    marginLeft:'15px',
    marginTop:'15px',
    border: '2px solid grey',
    borderRadius: '2px'
  }

  var inputStyles ={
    textAlign: 'center',
  }

  var noteBox = {
    width:'330px',
    height: '35px',
    marginTop: '10px',
    marginLeft: '40px',
    float: 'left',
    fontSize: '16px',
    border: '2px solid lightgrey',
  }

  var importantStyle = {
    float:'left',
    marginTop: '25px',
    marginLeft: '6px',
  }
  var importantTextStyle = {
    float:'left',
    marginTop: '22px',
    marginLeft: '6px',
    fontFamily: 'arial',
    fontSize:'16px',
  }

  var sendStyle ={
  float: 'middle',
  width: '85px',
  height: '35px',
  cursor: 'pointer',
  padding: '8px 15px',
  marginTop: '13px',
  marginRight: '90px',
  border: '2px solid #60686b',
  borderRadius: '3px',
  font: '16px Arial, Helvetica, sans-serif',
  color: '#fffbe8',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  }

  class App extends Component {
    render() {
      return (
        <div style={appContainer}>
          <div style={noteHolder}> Enter Text Below to Start Your Notes </div>
          <form style={inputStyles}>
          <input type="text" placeholder="Enter Your Note" style={noteBox} />
          <span style={importantTextStyle}>Important: </span> 
          <input type="checkbox" value="Important" style={importantStyle}/>  
          <input type="submit" value="Send" style={sendStyle} />
          </form>
        </div>  
      );
    }
  }

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage} />
      <Route path="roomfinder" component={RoomFinder} />
      <Route path="/room/:roomId" component={App} />
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  )
  
/*  
Jim's React Router Example

 ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="users" component={UserList}>
          <Route path="/user/:userId" component={User}/>
        </Route>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  );
    {this.props.children} for paths that are nested in eachother
*/



