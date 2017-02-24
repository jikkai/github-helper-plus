import { $, $$ } from '../../utils/dom'

class Icon {
  init () {
    const contentEl = $('table.files td.content')

    for (let i = 0, len = contentEl.length; i < len; i++) {
      const content = contentEl[i].innerText

      if (/.css$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-css"></i>`
      }
      if (/.js$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-js"></i>`
      }
      if (/.jsx$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-jsx"></i>`
      }
      if (/.json$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-json"></i>`
      }
      if (/.vue$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-vue"></i>`
      }
      if (/.html$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-html"></i>`
      }
      if (/.java$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-java"></i>`
      }
      if (/.jsp$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-jsp"></i>`
      }
      if (/.md$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-md"></i>`
      }
      if (/^yarn.lock$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-yarn"></i>`
      }
      if (/^gulpfile(.babel)?.js$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-gulpfile"></i>`
      }
      if (/^package.json$/.test(content)) {
        contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-npm"></i>`
      }
    }
  }
}

export default () => {
  setTimeout(() => {
    new Icon().init()
  }, 400)
}
