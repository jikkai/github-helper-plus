import Remark from './remark'
import Icons from './icons'
import Download from './download'

chrome.storage.sync.get('GHP', (data: any)=> {
  const USER_LIST = data.GHP ? data.GHP.USER_LIST : []
  Remark(USER_LIST)
})

Icons()
Download()
