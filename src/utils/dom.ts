export const $$ = (selector: string) => {
  return <HTMLElement>document.querySelector(selector)
}

export const $ = (selector: string) => {
  return <NodeListOf<HTMLElement>>document.querySelectorAll(selector)
}