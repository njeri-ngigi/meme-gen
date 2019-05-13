import React from 'react';
import PropTypes from 'prop-types';
import Meme from './meme';

const memes = ({ images }) => {
  const columnHeights = Math.floor(images.length / 4);
  return (
    <div className="row">
      <Meme images={images.splice(0, columnHeights+1)}/>
      <Meme images={images.splice(0, columnHeights)}/>
      <Meme images={images.splice(0, columnHeights)}/>
      <Meme images={images.splice(0)}/>
    </div>
  )
}

memes.displayName = 'memes';
memes.propTypes = {
  images: PropTypes.array
}

export default memes;
