const cloud = require('wx-server-sdk')
cloud.init()
let db = cloud.database()
exports.main = async (event, ctx) => {
  const LIMIT = 50
  let response = []
  const { total } = await db.collection('attendence_list').count()
  const skipTime = Math.ceil(total/LIMIT)
  for (let i = 0; i < skipTime; i++) {
    let { data } = await db.collection('attendence_list').skip(i*LIMIT).limit(LIMIT).get()
    response.push(...data)
  }
  let typeMap = {
    '1': 'leave_in_lieu',
    '2': 'overtime',
    '3': 'leave'
  }
  let res = response.reduce((account, current) => {
    let { type, day } = current
    account[typeMap[type]] += day
    if (type === 2) {
      account.overage += day
    }
    if (type === 1) {
      account.overage -= day
    }
    return account
  }, { leave_in_lieu: 0, overtime: 0, leave: 0, overage: 0 })
  return {
    errno: 0,
    data: res
  }
}