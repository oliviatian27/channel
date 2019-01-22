import convertData from './convert-data'

const JsonUrl = 'http://localhost:3001/data'

export default function loadFromServer(onSuccess){
  return fetch(JsonUrl)
  .then(res=>{
    return res.json()
  })
  .then(json=>{
    onSuccess(convertData(json))
  })
  .catch(err => console.error('SERVER REQUEST FAILED: ', err))
}
