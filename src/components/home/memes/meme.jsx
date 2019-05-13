import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ACTIONS from '../../../redux/actions';

const meme = ({ images, dispatch }) => (
  <div className="column">
    {
      images.map(({ name, image })=>(
        <Link to="/image" key={name}>
          <img 
            src={image}
            style={{width:"100%"}}
            alt={name}
            onClick={() => dispatch(
              ACTIONS.setUrl({ url: image, name }))}
          />
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
