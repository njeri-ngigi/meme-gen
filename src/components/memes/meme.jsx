import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


// TODO: use onclick handler to set url when image is clicked.
const meme = ({ images }) =>  (
  <div className="column">
    {
      images.map((image)=>(
        <Link to={{
          pathname: "/image",
          state: {
            url: image.url
          }
          }} key={image.name}>
          <img src={image.url} style={{width:"100%"}}/>
        </Link>
      ))
    }
  </div>
)

meme.displayName = 'meme';
meme.propTypes = {
  images: PropTypes.object
}

export default meme;
