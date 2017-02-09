import { $$, setAttributes } from '../../utils/dom'

class Organizations {
  constructor (organizations: any, API: any) {
  }

  init () {
    const orgTabEl = document.createElement('a')
    setAttributes(orgTabEl, {
      href: `${location.pathname}?tab=organizations`,
      role: 'tab',
      'aria-selected': 'false'
    })
    orgTabEl.className = 'underline-nav-item'
    orgTabEl.innerHTML = 'Organizations <span class="counter">0</span>'

    $$('.user-profile-nav .underline-nav').appendChild(orgTabEl)
  }
}

export default (content: any, API: any) => {
  const { organizations } = content

  new Organizations(organizations, API).init()
}
