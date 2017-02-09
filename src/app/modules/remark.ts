import { $, $$ } from '../../utils/dom'

class Remark {
  remark: any
  API: any

  constructor (remark: any, API: any) {
    this.remark = remark
    this.API = API
  }

  editNickname (username: string, nickname: HTMLSpanElement) {
    return () => {
      const name = prompt('请输入备注名') || '双击修改备注名'

      const content = {
        remark: {
          ...this.remark,
          [username]: name
        }
      }

      this.API.EDIT_GIST({
        description: 'Github Helper Plus Sync Settings GIST',
        files: { ghpsync: { content: JSON.stringify(content) } }
      }).then(() => {
        nickname.innerText = `(${name})`
      })
    }
  }
}

class RemarkMain extends Remark {
  init () {
    const fullnameEl: HTMLElement = $$('.vcard-fullname')

    if (fullnameEl !== null && !fullnameEl.innerHTML.includes('ghp-nickname__main')) {
      const name = this.remark[$$('.vcard-username').innerText]
      const username = $$('.vcard-username').innerText

      const nickname = document.createElement('span')
      nickname.className = 'ghp-nickname__main'
      nickname.innerText = `(${name || '双击修改备注名'})`

      nickname.ondblclick = this.editNickname(username, nickname)

      $$('.vcard-fullname') && $$('.vcard-fullname').appendChild(nickname)
    }
  }
}

class RemarkList extends Remark {
  init () {
    if (location.search.includes('tab=follow')) {
      const userNodeList: Array<HTMLElement> = Array.from($('div.d-table-cell.col-9.v-align-top.pr-3 > a'))
      const listEl = $$('.js-repo-filter.position-relative')
      
      listEl.ondblclick = (event) => {
        const target = <HTMLElement>event.target

        if (/^nickname-\d/.test(target.id)) {
          const username = this.getUsername(<HTMLElement>target.previousElementSibling)

          this.editNickname(username, target)()
        }
      }

      for (let i = 0; i < userNodeList.length; i++) {
        const item = userNodeList[i]

        if (!item.innerHTML.includes('ghp-nickname__list')) {
          const username = this.getUsername(item)
          const fullname = item.innerText.replace(` ${username}`, '')

          const name = this.remark[username]

          const nickname = document.createElement('span')
          nickname.className = 'ghp-nickname__list'
          nickname.innerText = `(${name || '双击修改备注名'})`
          nickname.id = `nickname-${i}`

          item.parentNode.insertBefore(nickname, item.nextSibling)
        }
      }
    }
  }

  getUsername (item: HTMLElement) {
    const nameArray: Array<string> = item.innerText.split(' ')
    return nameArray[nameArray.length - 1]
  }
}

export default (content: any, API: any) => {
  const { remark } = content

  new RemarkMain(remark, API).init()
  new RemarkList(remark, API).init()
}
