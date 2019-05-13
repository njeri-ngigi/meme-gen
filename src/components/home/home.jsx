import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Memes from './memes/memes';
import ACTIONS from '../../redux/actions';
import mockImages from '../../utils/mockimages';

class Home extends Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    console.log('constructor>>>>', this.props.images);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ACTIONS.setLoading(true));
    await dispatch(ACTIONS.setImages(mockImages));
    console.log('componentDidMount>>>', this.props.images)
    window.addEventListener('scroll', this.loadMore);
  }

  loadMore() {
    const scroll = (window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight);
    const { images, next, dispatch } = this.props;
    console.log(images);
    if (scroll && next) {
      console.log("scroll bitches!!", images, '............');
      dispatch(ACTIONS.fetchMemeableImages(next, true))
    }

    // if (url) this.props.dispatch(ACTIONS.fetchMemeableImages(url, true))
  }

  render() {
    // window.addEventListener('scroll', this.loadMore);
    const { images, isLoading } = this.props;
    console.log('render>>>>>>', images)
    const loader = <div className="loader" key={0}><Loader type="Puff" color="#EAECEE"/></div>
    return (
    <div className="home">
      <Navbar/>
      <Sidebar/>
      <div className="photos">
        { isLoading ? loader : <Memes images={images}/> }
      </div>
      <a href="https://twitter.com/nj3ry"><h4>@nj3ry</h4></a>
    </div>
    );
  }
}

const mapStateToProps = ({ images, isLoading, next }) => ({ images, isLoading, next })
Home.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  next: PropTypes.any,
  errors: PropTypes.any,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(Home);
