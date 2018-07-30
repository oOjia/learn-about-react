// import { createElement } from './dom'
import render from "./rdom";

const user = { name: 'test' }
const App = () => {
  return <div>{user.name}</div>
}

let createElement = (type, props={}, ...children) => {
  return { type, props, children }
}

render(<App />, window.root);