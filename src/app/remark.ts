import { $$ } from '../utils/dom'
import { createGist } from '../utils/api'

const getName = () => {
  const settings = JSON.parse(localStorage.getItem('settings'))
  console.log(settings)
  const name = 'test'
  return name
}

const editName = () => {
  const name = prompt() || getName()
  nicknameEle.innerText = `(${name})`
}

const createName = () => {
  const nickname = document.createElement('span')
  nickname.className = 'ghp-nickname'
  nickname.innerText = `(${getName()})`

  nickname.ondblclick = editName

  return nickname
}

const nicknameEle = createName()

const remark = (nicknameEle: HTMLElement) => {
  $$('.vcard-fullname') && $$('.vcard-fullname').appendChild(nicknameEle)
}

export default remark(nicknameEle)
