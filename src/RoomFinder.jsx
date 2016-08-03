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

export default class RoomFinder extends Component {
  onCreateClick(e) {
    e.preventDefault()
    browserHistory.push('/room/1')
  }
  render() {
    return (
      <div style={roomStyle}>
        <h2>Select Below to Create a Room or Join an Existing One</h2>
        <form>
          <input type="button" onClick={this.onCreateClick.bind(this)} value="Create" style={roomButtonStyle} />
          <input type="button" value="Join" style={roomButtonStyle} />
        </form> 
      </div>      
    );
  }
}
