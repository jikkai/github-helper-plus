import { $$ } from '../utils/dom'

import './style.css'

const tokenEl = <HTMLInputElement>$$('#token')
const idEl = <HTMLInputElement>$$('#id')
const buttonEl = <HTMLInputElement>$$('button')

buttonEl.onclick = () => {
  const TOKEN: string = tokenEl.value
  const GIST_ID: string  = idEl.value

  chrome.storage.sync.set({
    GHP: { TOKEN, GIST_ID }
  }, () => {
    location.reload()
  })
}

chrome.storage.sync.get('GHP', (data: any)=> {
  const { TOKEN, GIST_ID } = data.GHP

  tokenEl.value = TOKEN
  idEl.value = GIST_ID
})
