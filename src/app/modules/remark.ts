import { $$ } from '../../utils/dom'

class Remark {
  constructor (params: any) {
    console.log(params)
    const nickname = document.createElement('span')
    nickname.className = 'ghp-nickname'
    nickname.innerText = `(双击修改备注名)`

    nickname.ondblclick = this.editNickname(nickname)

    $$('.vcard-fullname') && $$('.vcard-fullname').appendChild(nickname)
  }

  editNickname (nickname: HTMLSpanElement) {
    return () => {
      const name = `(${prompt('请输入备注名') || '双击修改备注名'})`
      nickname.innerText = name
    }
  }
}

export default (content: any) => {
  const { remark } = content
  const instance = new Remark(remark)
}
