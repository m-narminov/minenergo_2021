exports.alignHeader = () => {}

exports.getDate = date => {
  const dateStr = new Date(date).toISOString().split('T')[0].split('-')
  return `${dateStr[2]}.${dateStr[1]}.${dateStr[0]}`
}
