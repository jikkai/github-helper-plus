import { $$ } from '../../utils/dom'

const init  = () => {
  const nickname = document.createElement('span')
  nickname.className = 'ghp-nickname'
  nickname.innerText = `(双击修改备注名)`

  nickname.ondblclick = () => {
    const name = `(${prompt() || '双击修改备注名'})`
    nickname.innerText = name
  }

  $$('.vcard-fullname') && $$('.vcard-fullname').appendChild(nickname)
}

const Remark = (content: any) => {
  const { remark } = content

  if (remark) {
  }

  init()
}

export default Remark
