import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';
import Share from './share';

class ViewImage extends Component {
  render() {
    const {url: { url, name }} = this.props;
    return (
      <div className="view-image">
        <Link to="/">
          <div className="back-icon">
            <MdArrowBack/>
          </div>
        </Link>
        <div className="image">
          <img src={url} alt={name}/>
        </div>
        <div className="share-icons">
          <Share/>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  url: state.url
})

ViewImage.propTypes = {
  url: PropTypes.object
}

export default connect(mapStateToProps)(ViewImage);
