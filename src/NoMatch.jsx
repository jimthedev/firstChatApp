import React, {Component} from 'react';

var noMatchStyle = {
  display:'block',
  width: '473px',
  height: '480px',
  textAlign:'center',
  margin:'0 auto',
  border: '3px solid #333',
  boxShadow: '3px 2px 25px 3px rgba(255,204,0,0.91)'
}

export default class NoMatch extends Component {
    render() {
      return (
        <div style={noMatchStyle}>
          <img src="http://i.imgur.com/KsPIFpv.jpg" />
          <h2>..You shouldn't be here.. Lets try Here</h2>
        </div>  
      );
    }
  }