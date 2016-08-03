import React, {Component} from 'react';
import { browserHistory } from 'react-router';

var titleBoxStyle = {
  width: '100%', 
  height: '250px',
  margin: '0',
  textAlign: 'center',
  paddingTop: '20px',
  backgroundColor: '#7edda3', 
  backgroundImage:'url("http://i287.photobucket.com/albums/ll139/vmsg/Abstract%20sigs/abstract-waves-byvanesinger.png")', opacity: .8,
  backgroundPosition: 'center',
  borderRadius: '1px',
}

var titleStyle = {
  fontSize: '80px',
  fontFamily: 'Pattaya, arial',
  color: 'whitesmoke',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  marginTop:'60px',
}

var loginFormStyle = {
  margin: '0 auto',
  textAlign: 'center',
  width: '300px',
  height:'300px',
  marginTop: '20px',
  backgroundColor: '#7edda3',
  backgroundImage:'url("http://i287.photobucket.com/albums/ll139/vmsg/Abstract%20sigs/abstract-waves-byvanesinger.png")', 
  opacity: .8,
  backgroundPosition: 'center',
  fontFamily: 'arial',
  border: '1px solid grey',
  borderRadius: '3px',
}

var loginDescriptor = {
  float: 'left',
  marginTop: '15px',
  marginLeft: '10px',
  fontSize: '16px',
  color: '#333' 
}

var loginStyle = {
  width: '175px',
  height: '25px',
  fontSize:'14px',
  textAlign: 'left',
  marginTop: '10px',
  border: '1px solid lightgrey',
}

var loginSubmit = {
  width: '100px',
  height: '50px',
  fontSize: '16px',
  marginTop: '15px',
  cursor:'pointer',
}

export default class LandingPage extends Component {
  onLoginSubmit(e) {
    e.preventDefault()
    browserHistory.push('/roomfinder')
  }
  render() {
    return (
      <div>
        <div style={titleBoxStyle}>
          <h1 style={titleStyle}>Note-oriety</h1>
        </div>
        <form onSubmit={this.onLoginSubmit.bind(this)} style={loginFormStyle}><span style={loginDescriptor}>Please Fill Out Your Information Below:</span> <br />
          <input type="text" placeholder="Nickname" style={loginStyle} /> <br />
          <input type="phone" placeholder="Phone Number" style={loginStyle} /> <br />
          <input type="email" placeholder="Email" style={loginStyle} /> <br />
          <input type="submit" placeholder="Submit" style={loginSubmit} />
        </form>  
      </div>
    );
  }
}
