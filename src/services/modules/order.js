import myRequest from '../request/myRequest'
const fetchOrderList = (type) => {
  return myRequest.get({
    url: '/order/list',
    params: {
      type: type,
    },
  })
}

export { fetchOrderList }
