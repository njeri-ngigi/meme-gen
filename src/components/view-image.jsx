import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewImage extends Component {
  render() {
    // TODO: get url from redux store
    const {state: { url }} = this.props.location;
    return (
      <div className="flex-container">
        <div className="view-image">
          <img src={url}/>
        </div>
      </div> 
    );
  }
}

ViewImage.propTypes = {
  location: PropTypes.object
}

export default ViewImage;
