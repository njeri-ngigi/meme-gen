import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ViewImage extends Component {
  render() {
    const { url } = this.props;
    return (
      <div className="flex-container">
        <div className="view-image">
          <img src={url}/>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  url: state.url
})

ViewImage.propTypes = {
  url: PropTypes.string
}

export default connect(mapStateToProps)(ViewImage);
