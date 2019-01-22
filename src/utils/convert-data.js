
export default function convertData (data) {
  let groupedData=[]
  data.sort((a,b)=>new Date(a.time)-new Date(b.time))

  for (var i = 0; i < data.length; i++) {
    let currentDate = data[i].time.split(" ")[0]
    let previousDate = i>0?data[i-1].time.split(" ")[0] : null
    if (i===0||currentDate!==previousDate) {
      let obj={}
      obj['date']=currentDate
      obj['data']=[]
      groupedData.push(obj)
    }
    groupedData[groupedData.length-1]['data'].push(data[i])
  }
  return groupedData
}
