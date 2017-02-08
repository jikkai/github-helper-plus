import Axios from 'axios'

const TOKEN = localStorage.getItem('TOKEN') || ''
const GIST_ID = localStorage.getItem('GIST_ID') || ''

const axios = Axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Authorization': `token ${TOKEN}` }
})

export const auth = () => {
  return axios.get(`/user`)
}

export const getGist = () => {
  return axios.get(`/gists/${GIST_ID}`)
}

export const createGist = (gist: Object) => {
  return axios.post(`/gists`, gist)
}
