import myRequest from '../request/myRequest'
const getHotSuggestions = () => {
  return myRequest.get({
    url: '/home/hotSuggests',
  })
}
const getCategories = () => {
  return myRequest.get({
    url: '/home/categories',
  })
}
const getHouseList = (num = 1) => {
  return myRequest.get({
    url: '/home/houselist',
    params: {
      page: num,
    },
  })
}

export { getHotSuggestions, getCategories, getHouseList }
