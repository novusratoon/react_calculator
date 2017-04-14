var React = require('react');
var buttonStyles = require('../style/ButtonStyles');
class Row extends React.Component{
    //Updates the each key pressed
    constructor(props) {
      super(props);
      this.state = {
        button1 : this.props.b1,
        button2 : this.props.b2,
        button3 : this.props.b3,
        button4 : this.props.b4,
        button5 : this.props.b5,

      };
     }
    //Render function to render 
    render(){
      return (
        <div>
          <input type="button"  name={this.state.button1} value={this.state.button1} style={buttonStyles} onClick={this.props.onClick}/>
          <input type="button"  name={this.state.button2} value={this.state.button2}  style={buttonStyles} onClick={this.props.onClick}/>
          <input type="button"  name={this.state.button3} value={this.state.button3}  style={buttonStyles} onClick={this.props.onClick}/>
          <input type="button"  name={this.state.button4} value={this.state.button4}  style={buttonStyles} onClick={this.props.onClick}/>
          <input type="button"  name={this.state.button5} value={this.state.button5}  style={buttonStyles} onClick={this.props.onClick}/>
        </div>
      );
    }
}
module.exports = Row;