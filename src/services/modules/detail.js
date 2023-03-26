import myRequest from '../request/myRequest'
const getDetail = (houseId) => {
  return myRequest.get({
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}

export default getDetail
