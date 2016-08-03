import React, {Component} from 'react';
import { browserHistory } from 'react-router';

var roomStyle = {
  textAlign: 'center',
  fontFamily: 'arial',
  marginTop: '30px',
}

var roomButtonStyle = {
  margin: '10px',
  width: '100px',
  height: '50px',
  cursor: 'pointer',
  padding: '10px 20px',
  border: '1px solid #b2b8ba',
  borderRadius: '3px',
  background: '#7edda3',
  boxShadow: '2px 2px 2px 0 rgba(0,0,0,0.2)',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  color:'whitesmoke',
  fontSize: '16px',
  fontFamily: 'Pattaya',
}

var roomReturnStyle = {
  margin: '10px',
  width: '222px',
  height: '30px',
  clear:'both',
  cursor: 'pointer',
  border: '1px solid #b2b8ba',
  borderRadius: '3px',
  background: '#b30000',
  boxShadow: '2px 2px 2px 0 rgba(0,0,0,0.2)',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  color:'whitesmoke',
  fontSize: '16px',
  fontFamily: 'Pattaya',
}

export default class RoomFinder extends Component {
  onCreateClick(e) {
    e.preventDefault()
    browserHistory.push('/room/1')
  }

  onReturnClick(e) {
    e.preventDefault()
    browserHistory.push('/')
  }

  render() {
    return (
      <div style={roomStyle}>
        <h2>Select Below to Create a Room or Join an Existing One</h2>
        <form>
          <input type="button" value="Create" style={roomButtonStyle} onClick={this.onCreateClick.bind(this)} />
          <input type="button" value="Join" style={roomButtonStyle} /> <br />
          <input type="button" value="Return to Login" style={roomReturnStyle} onClick={this.onReturnClick.bind(this)} />
        </form> 
      </div>      
    );
  }
}
