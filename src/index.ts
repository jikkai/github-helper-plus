import { createGist } from './utils/api'

import './remark'

import './style.css'

const isInit: Boolean = localStorage.getItem('init_code') === null

if (isInit) {
  createGist({
    description: 'Github Helper Plus Sync Settings GIST',
    files: {
      ghpsync: {
        content: 'String file contents'
      }
    }
  }).then((resp) => {
    localStorage.setItem('init_code', '1')
  })
}
