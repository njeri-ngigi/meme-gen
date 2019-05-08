const Types = {
  SET_URL: 'SET_URL'
}

const setUrl = url => ({
  type: Types.SET_URL,
  url
})

export default {
  setUrl,
  Types
}
