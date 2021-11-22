import React, { Component } from 'react';
import { connect } from "react-redux";
//import Band from '../components/Band';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    //console.log(this.props.bands)
    const bandList = this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
    return bandList
  }

  addingBand = (bandData) => {
    console.log(bandData)
    return this.props.addBand(bandData)
  }

  render() {
    //console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.addingBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandData => dispatch({ type: 'ADD_BAND', payload: bandData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
