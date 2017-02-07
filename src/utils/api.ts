import Axios from 'axios'

const TOKEN = ''

const axios = Axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Authorization': `token ${TOKEN}` }
})

interface Gist {
  description: String,
  files: {
    ghpsync: {
      content: String
    }
  }
}

export const createGist = (gist: Gist) => {
  return axios.post(`/gists`, gist)
}
