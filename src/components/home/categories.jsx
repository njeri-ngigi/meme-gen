import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Aux from '../../hoc/aux';
import ACTIONS from '../../redux/actions';
import { memeableImagesUrl } from '../../utils/constants';

const categories = ({ dispatch }) => (
  <Aux>
    <button title="Trending Memes">Trending</button>
    <button title="GIFs to send to your homies">GIFs</button>
    <button title="Random Content you won't believe exists">Random</button>
    <button title="Cats Obviously!">Cats</button>
    <button
      title="Create a dope meme"
      onClick={() => {
          dispatch(ACTIONS.setLoading(true));
          dispatch(ACTIONS.fetchMemeableImages(memeableImagesUrl, false))
        }
      }>
      Memeable Images</button>
    <button title="Russian Roullete?">Umh ... Surprise me?</button>
  </Aux>
)

categories.displayName = "categories";
categories.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(categories);
