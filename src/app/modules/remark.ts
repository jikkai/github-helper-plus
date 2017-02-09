import { $$ } from '../../utils/dom'

class Remark {
  constructor (remark = {}, API: any) {
    const fullnameEl: HTMLElement = $$('.vcard-fullname')

    if (fullnameEl !== null) {
      const name = remark[$$('.vcard-username').innerText]

      const nickname = document.createElement('span')
      nickname.className = 'ghp-nickname'
      nickname.innerText = `(${name || '双击修改备注名'})`

      nickname.ondblclick = this.editNickname(nickname, remark, API)

      if (!fullnameEl.innerHTML.includes('ghp-nickname')) {
        $$('.vcard-fullname') && $$('.vcard-fullname').appendChild(nickname)
      }
    }
  }

  editNickname (nickname: HTMLSpanElement, remark: any, API: any) {
    return () => {
      const name = prompt('请输入备注名') || '双击修改备注名'
      nickname.innerText = `(${name})`

      const content = {
        remark: {
          ...remark,
          [$$('.vcard-username').innerText]: name
        }
      }

      API.EDIT_GIST({
        description: 'Github Helper Plus Sync Settings GIST',
        files: { ghpsync: { content: JSON.stringify(content) } }
      })
    }
  }
}

export default (content: any, API: any) => {
  const { remark } = content
  const instance = new Remark(remark, API)
}
