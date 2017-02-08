import './style.css'

chrome.storage.sync.get('TOKEN', (data)=> {
  console.log(data)
})
 