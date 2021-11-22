// Add BandInput component
import React, { Component } from 'react'
//import { connect } from 'react-redux';

class BandInput extends Component {
 
  state = {
    name: '' 
  }

  handleChange = event => {
      this.setState({
        name: event.target.value
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Band Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

//const mapDispatchToProps = dispatch => {
//  return {
//    addBand: bandData => dispatch({ type: "ADD_BAND", payload: bandData})
//  }
//}

export default BandInput
