import Remark from './remark'
import Icons from './icons'

chrome.storage.sync.get('GHP', (data: any)=> {
  const { USER_LIST } = data.GHP
  Remark(USER_LIST)
})
Icons()
