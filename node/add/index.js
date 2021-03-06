// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
let db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let { start_time, end_time, type, day } = event
  return await db.collection('attendence_list').add({
    data: {
      start_time,
      end_time,
      type,
      day
    }
  })
}