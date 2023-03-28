import myRequest from '../request/myRequest'
const fetchSearchTop = () => {
  return myRequest.get({
    url: '/search/top',
  })
}
const fetchSearchResaul = () => {
  return myRequest.get({
    url: '/search/result',
  })
}

export { fetchSearchTop, fetchSearchResaul }
