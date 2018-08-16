import { $, $$ } from '../../utils/dom'
import './style.css'

class Download {
  constructor () {
    const isPrivate = !!$$('h1.private')
    if (isPrivate) return

    const $content = $('table.files td.content')

    for (let i = 0, len = $content.length; i < len; i++) {
      const $link = <HTMLLinkElement>$content[i].querySelector('span a')
      const isFolder = $content[i].previousElementSibling.innerHTML.includes('octicon-file-directory')
      const hasDownload = $content[i].innerHTML.includes('ghp-download')

      if ($link && !isFolder && !hasDownload) {
        const $download = document.createElement('a')
        $download.className = 'ghp-download'
        $download.download = 'download'
        $download.href = $link.href
          .replace('https://github.com', 'https://raw.githubusercontent.com')
          .replace('/blob/', '/')
        $content[i].appendChild($download)
      }
    }
  }
}

export default () => {
  setTimeout(_ => {
    new Download()
  }, 700)
}
