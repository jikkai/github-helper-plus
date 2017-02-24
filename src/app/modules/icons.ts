import { $, $$ } from '../../utils/dom'

class Icon {
  init () {
    const contentEl = $('table.files td.content')
    const regObj = {
      babel: /^\.babelrc\.?(json|js)?$/,
      c: /\.c$/,
      coffee: /\.coffee$/,
      css: /\.css$/,
      csv: /\.csv$/,
      elm: /\.elm$/,
      eslint: /^\.eslint(ignore|rc)\.?(js|json)?/,
      font: /\.(eot|otf|ttf|woff|woff2)$/,
      git: /^\.git(ignore|attributes)$/,
      gulpfile: /^gulpfile(\.babel)?\.js$/,
      html: /\.html?$/,
      image: /\.(png|jpg|jpeg|bmp|webp)$/,
      java: /\.java$/,
      js: /\.js$/,
      json: /\.json$/,
      jsp: /\.jsp$/,
      jsx: /\.jsx$/,
      less: /\.less$/,
      license: /^license/,
      lisp: /\.lisp/,
      log: /\.log/,
      lua: /\.lua$/,
      markdown: /\.md$/,
      nodejs: /\.node$/,
      npm: /^(package\.json|\.npmignore)$/,
      pdf: /\.pdf$/,
      perl: /\.p(l|m)$/,
      php: /\.php$/,
      plist: /\.plist$/,
      postcss: /^\.postcss\.?(js|json)?/,
      psd: /\.psd$/,
      pug: /\.pug$/,
      python: /\.py$/,
      r: /\.R/,
      riot: /\.riot/,
      ruby: /\.rb/,
      rust: /\.rs/,
      sass: /\.sass$/,
      scala: /\.scala$/,
      scss: /\.scss$/,
      shell: /\.sh$/,
      sql: /\.sql$/,
      stylelint: /^\.stylelintrc$/,
      stylus: /\.styl$/,
      svg: /\.svg$/,
      swift: /\.swift$/,
      text: /\.te?xt$/,
      typescript: /(\.ts$|^tsconfig\.json$)/,
      vue: /\.vue$/,
      webpack: /webpack+\S*\.js$/,
      yaml: /\.ya?ml$/,
      yarn: /^yarn\.lock$/
    }

    for (let i = 0, len = contentEl.length; i < len; i++) {
      const content = contentEl[i].innerText

      for (let key in regObj) {
        if (regObj.hasOwnProperty(key)) {
          if (regObj[key].test(content.toLowerCase())) {
            contentEl[i].previousElementSibling.innerHTML = `<i class="ghp-icon icon-${key}"></i>`
          }
        }
      }
    }
  }
}

export default () => {
  setTimeout(() => {
    new Icon().init()
  }, 500)
}
