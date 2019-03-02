const cloud = require('wx-server-sdk')
cloud.init()

function formatterDate (date, isToday = false) {
  let cloneDate
  if (date) { 
    cloneDate = new Date(date)
  } else {
    cloneDate = new Date()
  }
  let year = cloneDate.getFullYear()
  let month = String(cloneDate.getMonth() + 1).padStart(2, '0')
  let day = 1
  if (isToday) {
    day = String(cloneDate.getDate()).padStart(2, '0')
  }
  return `${year}-${month}-${day}`
}

let db = cloud.database()
exports.main = async (event, ctx) => {
  let { type, date } = event
  const _ = db.command
  let where = {}
  // let where = {
  //   start_time: _.gte(formatterDate(date)).and(_.lte(formatterDate(date)))
  // }
  if (type) where.type = type
  let response = await db.collection('attendence_list').where(where).get()
  return response
}