import { $$ } from '../../utils/dom'
import './style.css'

class Contribution {
  constructor () {
    const $$graph = $$('.js-calendar-graph-svg')
    Array.from($$graph.querySelectorAll('[fill="#c6e48b"]'))
      .forEach($graph => {
        $graph.setAttribute('fill', '#c3ddfc')
      })
    Array.from($$graph.querySelectorAll('[fill="#7bc96f"]'))
      .forEach($graph => {
        $graph.setAttribute('fill', '#7cb1f9')
      })
    Array.from($$graph.querySelectorAll('[fill="#239a3b"]'))
      .forEach($graph => {
        $graph.setAttribute('fill', '#4881e5')
      })
    Array.from($$graph.querySelectorAll('[fill="#196127"]'))
      .forEach($graph => {
        $graph.setAttribute('fill', '#2543a3')
      })
  }
}

export default () => {
  new Contribution()
}
