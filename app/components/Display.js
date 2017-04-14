var React = require('react');
//Declaring Varible for styling 
var displayStyle = require('../style/DisplayStyle');
var displayStyle = {
    position:'relative',
	  width: '250px',
	  height: '60px',
    margin:'2px',
    color:'black',
    borderRadius: '10px',
    backgroundColor:'#bccd95',
    fontSize:'21px',
    textAlign:'right'
 };

class Display extends React.Component{
	constructor(props) {
    	super(props);
  	}
	render() {
      return (
        <div>
        <input type="text" size="15"  style={displayStyle} onChange={this.show} value={this.props.value}/>
        </div>
      );
    }
    show(){

    }	
}
module.exports = Display;