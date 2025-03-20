function traverseDOM(node) {
    if (!node) return; 
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log(node.tagName);
    }
    for (let child of node.childNodes) {
      traverseDOM(child);
    }
  }
  traverseDOM(document.body);
  