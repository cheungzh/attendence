const cloud = require('wx-server-sdk')
cloud.init()
db = cloud.database()
exports.main = async (event, ctx) => {
  let { id } = event
  let response = await db.collection('attendence_list').doc(id).get()
  return response
}