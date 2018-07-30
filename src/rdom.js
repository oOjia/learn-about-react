export default function rdom(node, container) {
  let dom;
  if (typeof node === 'string') {
    dom = document.createTextNode(node);
    container.appendChild(dom);
  } else if (node.type && typeof node.type === 'string') {
    dom = document.createElement(node.type);
    container.appendChild(dom);
    node.children.forEach(element => {
      rdom(element, dom)
    });
  } else if (node.type && typeof node.type === "function") {
    const nodeInst = node.type();
    dom = document.createElement(nodeInst.type);
    container.appendChild(dom);
    nodeInst.children.forEach(element => {
      rdom(element, dom)
    });
  }
}