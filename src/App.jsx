  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
  
  import LandingPage from './LandingPage.jsx';
  import RoomFinder from './RoomFinder.jsx';
  import NoMatch from './NoMatch.jsx';

  import globalStyles from './assets/styles/global.css';
  import { StyleSheet, css } from 'aphrodite';

  var appContainer = {
    width:'800px',
    height:'525px',
    margin: '0 auto',
    marginTop: '20px',
    backgroundColor:'#7edda3',
    backgroundImage:'url("http://i287.photobucket.com/albums/ll139/vmsg/Abstract%20sigs/abstract-waves-byvanesinger.png")', 
    opacity: .8,
    border: '3px solid #333',
    borderRadius: '5px',
    boxShadow: '2px 2px 14px 2px rgba(32,32,33,0.91)',
  }

  var noteHolder = {
    width: '81%',
    height: '75%',
    // width:'650px',
    // height: '400px',
    backgroundColor:'whitesmoke',
    marginLeft:'15px',
    marginTop:'25px',
    border: '2px solid grey',
    borderRadius: '2px'
  }

  var exitStyle = {
    float: 'right',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    borderTop: 'none',
    borderRight: 'none', 
    borderBottom:'2px solid #990000',
    borderLeft:'2px solid #990000',
    borderRadius: '0px 0px 0px 3px',
    backgroundColor: '#b30000',
    font: '18px Arial, Helvetica, sans-serif',
    textAlign: 'center',
    color: '#fffbe8',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  }

  var inputStyles = {
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
    color: '#333',
  }

  var sendStyle = {
    float: 'middle',
    width: '85px',
    height: '35px',
    cursor: 'pointer',
    padding: '8px 15px',
    marginTop: '13px',
    marginRight: '40px',
    border: '1px solid #60686b',
    borderRadius: '3px',
    font: '16px Arial, Helvetica, sans-serif',
    color: '#fffbe8',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  }

  var bottomReference = {
    display: 'block',
    clear: 'both',
    marginLeft: '40px',
    marginTop: '35px',
    color: 'grey',
    opacity: '.6',
    fontFamily: 'arial',
  }

  class App extends Component {
    onExitClick(e) {
      e.preventDefault()
      browserHistory.push('/roomfinder')
    }
    render() {
      return (
        <div style={appContainer}>
          <input type="button" value="X" style={exitStyle} onClick={this.onExitClick.bind(this)} />
          <div style={noteHolder}> Enter Text Below to Start Your Notes </div>
          <form style={inputStyles}>
          <input type="text" placeholder="Enter Your Note" style={noteBox} />
          <span style={importantTextStyle}>Important: </span> 
          <input type="checkbox" value="Important" style={importantStyle}/>  
          <input type="submit" value="Send" style={sendStyle} />
          </form>
          <div style={bottomReference}>
            <span>NickName | </span>
            <span>Phone Number | </span>
            <span>Email</span>  
          </div>
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
