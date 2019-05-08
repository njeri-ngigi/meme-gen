import React from 'react';
import Aux from '../../hoc/aux';

const categories = () => (
  <Aux>
    <button title="Trending Memes">Trending</button>
    <button title="GIFs to send to your homies">GIFs</button>
    <button title="Random Content you won't believe exists">Random</button>
    <button title="Cats Obviously!">Cats</button>
    <button title="Russian Roullete?">Umh ... Surprise me?</button>
  </Aux>
)

categories.displayName = "categories";

export default categories;
