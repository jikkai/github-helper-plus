import Axios from 'axios'

import Remark from './modules/remark'
import Icons from './modules/icons'

chrome.storage.sync.get('GHP', (data: any)=> {
  const { USER_LIST } = data.GHP
  Remark(USER_LIST)
})
Icons()
