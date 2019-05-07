import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewImage extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="view-image">
        <img src={imageUrl}/>
      </div>
    );
  }
}

ViewImage.propTypes = {
  imageUrl: PropTypes.string
}

export default ViewImage;
