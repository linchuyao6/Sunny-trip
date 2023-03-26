import dayjs from 'dayjs'
const getDiffDays = (startDate, endDate) => {
  return dayjs(endDate).diff(startDate, 'day')
}
const formatDate = (date) => {
  return dayjs(date).format('MM月DD日')
}
const getSimpleDay = (date) => {
  return dayjs(date).format('MM.DD')
}
export { getDiffDays, getSimpleDay, formatDate }
