var React = require('react');
var Row= require('./Row');
var Display = require('./Display');
var ReactGA = require('react-ga');
var GA = require('../ga');

function initGA () {
  ReactGA.initialize(GA.trackingId);
}

class App extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {value: this.props.initialValue};
      this.handleOnClick = this.handleOnClick.bind(this);
      initGA();
  }

  handleOnClick(e){
    switch(e.target.value){
      case ' ' : break;
      case '=' :
                this.setState({value : eval(this.state.value)});
              break;
      case 'C' :
                this.setState({value : '0'});
              break;
      default : 
            if(this.state.value=="0"){
              if(e.target.value=="+"||e.target.value=="-"||e.target.value=="*"||e.target.value=="/")
                this.setState({value: this.state.value+e.target.value});
              else if(e.target.value==" ")
                this.setState({ value : '0'});
              else
                this.setState({ value : e.target.value});
            }
            else
              this.setState({value: this.state.value+e.target.value});
    }
  }
	
  render(){
		return (
			<div>
				<Display value={this.state.value}/>
        <Row b1={"1"} b2={"2"} b3={"3"} b4={"+"} b5={"-"} onClick={this.handleOnClick}/>
        <Row b1={"4"} b2={"5"} b3={"6"} b4={"*"} b5={"/"} onClick={this.handleOnClick}/>
        <Row b1={"7"} b2={"8"} b3={"9"} b4={"("} b5={")"} onClick={this.handleOnClick}/>
        <Row b1={"0"} b2={" "} b3={"."} b4={"="} b5={"C"} onClick={this.handleOnClick}/>
			</div>
			);
  }
}
	
module.exports = App;