import myRequest from '../request/myRequest'
const fetchFavorList = () => {
  return myRequest.get({
    url: '/favor/list',
  })
}
// const fetchSearchResaul = () => {
//   return myRequest.get({
//     url: '/search/result',
//   })
// }

export { fetchFavorList }
