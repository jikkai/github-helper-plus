import { auth, createGist, getGist } from './utils/api'

import './remark'

import './style.css'

auth().then((resp) => {
  const { id } = resp.data
  localStorage.setItem('id', id)

  getGist().then((resp) => {
    const { ghpsync } = resp.data.files
    localStorage.setItem('settings', ghpsync.content)
  }).catch(() => {
    createGist({
      description: 'Github Helper Plus Sync Settings GIST',
      files: {
        ghpsync: {
          content: '{}'
        }
      }
    }).then((resp) => {
      localStorage.setItem('init_code', '1')
    })
  })
})
