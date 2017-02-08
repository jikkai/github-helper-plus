import Axios from 'axios'

import Remark from './modules/remark'

import './style.css'

const storageCb = (data: any)=> {
  const { TOKEN, GIST_ID } = data.GHP

  const axios = Axios.create({
    baseURL: 'https://api.github.com',
    headers: { 'Authorization': `token ${TOKEN}` }
  })

  const API = {
    GET_USER: axios.get(`/user`),

    GET_GIST: axios.get(`/gists/${GIST_ID}`),
    ADD_GIST: gist => axios.post(`/gists`, gist)
  }

  API.GET_USER.then((resp) => {
    API.GET_GIST.then((resp) => {
      const { ghpsync } = resp.data.files

      Remark(ghpsync.content)
    }).catch(() => {
      API.ADD_GIST({
        description: 'Github Helper Plus Sync Settings GIST',
        files: { ghpsync: { content: '{}' } }
      })
    })
  })
}

chrome.storage.sync.get('GHP', storageCb)
