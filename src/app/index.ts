import Axios from 'axios'

import Remark from './modules/remark'
import Icons from './modules/icons'

import './style.css'

const storageCb = (data: any)=> {
  let { TOKEN, GIST_ID } = data.GHP

  const axios = Axios.create({
    baseURL: 'https://api.github.com',
    headers: { 'Authorization': `token ${TOKEN}` }
  })

  const API = {
    GET_USER: axios.get(`/user`),

    GET_GIST: axios.get(`/gists/${GIST_ID}`),
    ADD_GIST: gist => axios.post(`/gists`, gist),
    EDIT_GIST: gist => axios.patch(`/gists/${GIST_ID}`, gist)
  }

  API.GET_USER.then((resp) => {
    API.GET_GIST.then((resp) => {
      const { ghpsync } = resp.data.files

      // Initial modules
      Remark(JSON.parse(ghpsync.content), API)
      Icons()
    }).catch((err: Error) => {
      if (err.message === 'Request failed with status code 404') {
        API.ADD_GIST({
          description: 'Github Helper Plus Sync Settings GIST',
          files: { ghpsync: { content: '{}' } }
        }).then((resp) => {
          const { id } = resp.data

          GIST_ID = id
          chrome.storage.sync.set({
            GHP: { TOKEN, GIST_ID }
          })

          Remark({}, API)
        })
      }
    })
  })
}

chrome.storage.sync.get('GHP', storageCb)
