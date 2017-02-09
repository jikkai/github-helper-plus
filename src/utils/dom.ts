export const $$ = (selector: string) => {
  return <HTMLElement>document.querySelector(selector)
}

export const $ = (selector: string) => {
  return <NodeListOf<HTMLElement>>document.querySelectorAll(selector)
}

export const setAttributes = (el: HTMLElement, attributes: Object) => {
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      el.setAttribute(key, attributes[key])
    }
  }
}