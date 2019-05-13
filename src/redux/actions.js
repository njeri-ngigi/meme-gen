import axios from 'axios';
import { CORS_PREFIX } from '../utils/constants';

const Types = {
  SET_URL: 'SET_URL',
  SET_IMAGES: 'SET_IMAGES',
  SET_ERRORS: 'SET_ERRORS',
  SET_LOADING: 'SET_LOADING',
  UPDATE_IMAGES: 'UPDATE_IMAGES'
}

const setUrl = url => ({
  type: Types.SET_URL,
  url
})

const setImages = (images, next) => ({
  type: Types.SET_IMAGES,
  images,
  next,
  isLoading: false
})

const updateImages = (images, next) => ({
  type: Types.UPDATE_IMAGES,
  images,
  next
})

const setErrors = errors => ({
  type: Types.SET_ERRORS,
  errors
})

const setLoading = isLoading => ({
  type: Types.SET_LOADING,
  isLoading
})

const fetchMemeableImages = (url, update) => (dispatch) => {
  axios.get(`${CORS_PREFIX}${url}`)
  .then((response) => {
    const { data: { code, data, next }} = response;
    console.log('actions??????????', next);
    if (code !== 200) return dispatch(setErrors(data))
    update ? dispatch(updateImages(data, next)) : dispatch(setImages(data, next))
  }).catch(error => { throw error })
}

export default {
  setUrl,
  setImages,
  setErrors,
  setLoading,
  updateImages,
  Types,
  fetchMemeableImages
}
