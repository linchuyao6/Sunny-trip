import myRequest from '../request/myRequest'
const fetchFavorList = () => {
  return myRequest.get({
    url: '/favor/list',
  })
}
const fetchHistory = () => {
  return myRequest.get({
    url: '/favor/history',
  })
}

export { fetchFavorList, fetchHistory }
