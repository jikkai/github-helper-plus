import { $, $$ } from '../../utils/dom'
import './style.css'

class Remark {
  list: any

  constructor (list: any) {
    this.list = list
    this.initMain()
    this.initList()
  }

  initMain () {
    const $fullname: HTMLElement = $$('.vcard-fullname')

    if ($fullname !== null && !$fullname.innerHTML.includes('ghp-nickname__main')) {
      const name = this.list[$$('.vcard-username').innerText]
      const username = $$('.vcard-username').innerText

      const $nickname = document.createElement('span')
      $nickname.className = 'ghp-nickname__main'
      $nickname.innerText = `(${name || '双击修改备注名'})`

      $nickname.ondblclick = this.editNickname(username, $nickname)

      $$('.vcard-fullname') && $$('.vcard-fullname').appendChild($nickname)
    }
  }

  initList () {
    if (location.search.includes('tab=follow')) {
      const userNodeList: Array<HTMLElement> = Array.from($('div.d-table-cell.col-9.v-align-top.pr-3 > a'))
      const $list = $$('.float-left > .position-relative')

      $list.ondblclick = (event) => {
        const $target = <HTMLElement>event.target

        if (/^nickname-\d/.test($target.id)) {
          const username = this.getUsername(<HTMLElement>$target.previousElementSibling)

          this.editNickname(username, $target)()
        }
      }

      for (let i = 0; i < userNodeList.length; i++) {
        const $item = userNodeList[i]
        if ($item.parentElement.innerHTML.includes('ghp-nickname__list')) return

        const username = this.getUsername($item)
        const fullname = $item.innerText.replace(` ${username}`, '')

        const name = this.list[username]

        const $nickname = document.createElement('span')
        $nickname.className = 'ghp-nickname__list'
        $nickname.innerText = `(${name || '双击修改备注名'})`
        $nickname.id = `nickname-${i}`

        $item.parentNode.insertBefore($nickname, $item.nextSibling)
      }
    }
  }

  getUsername (item: HTMLElement) {
    const nameArray: Array<string> = item.innerText.split(' ')
    return nameArray[nameArray.length - 1]
  }

  editNickname (username: string, nickname: HTMLSpanElement) {
    return () => {
      let name = prompt('请输入备注名', this.list[username] || '')
      name = !name && name !== '' ? this.list[username] : name
      this.list = {
        ...this.list,
        [username]: name
      }

      chrome.storage.sync.set({
        GHP: { USER_LIST: this.list }
      }, () => {
        nickname.innerText = `(${name || '双击修改备注名'})`
      })
    }
  }
}

export default (list: any = []) => {
  new Remark(list)
}
