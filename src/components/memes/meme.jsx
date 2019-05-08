import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ACTIONS from '../../redux/actions';

const meme = ({ images, dispatch }) => (
  <div className="column">
    {
      images.map((image)=>(
        <Link to="/image" key={image.name}>
          <img 
            src={image.url}
            style={{width:"100%"}}
            onClick={() => dispatch(ACTIONS.setUrl(image.url))}/>
        </Link>
      ))
    }
  </div>
)

meme.displayName = 'meme';
meme.propTypes = {
  images: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect()(meme);
