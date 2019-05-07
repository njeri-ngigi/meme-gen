import React from 'react';
import PropTypes from 'prop-types';

const meme = ({ images }) =>  (
  <div className="column">
    {
      images.map((image)=>(
        <img src={image.url} style={{width:"100%"}} key={image.name}/>
      ))
    }
  </div>
)

meme.displayName = 'meme';
meme.propTypes = {
  images: PropTypes.object
}

export default meme;
