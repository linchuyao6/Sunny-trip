import myRequest from '../request/myRequest'

const getCityAll = function getCityAll() {
  return myRequest.get({
    url: '/city/all',
  })
}

export default getCityAll
