function handleText(textNode) {
  var v = textNode.nodeValue;

  var bernieNames = ["Sandy Amberg", "Angie Sanders", "Ambly Andberg", "Bergly Sanders", "Colonel Sanders", "Sal Amanders"];

  v = v.replace(/\bBernie Sanders\b/g, bernieNames[Math.floor(Math.random() * 6)]);

  textNode.nodeValue = v;
}

function walk(node) {
  var child, next;

  switch (node.nodeType) {
  case 1:  // Element
  case 9:  // Document
  case 11: // Document fragment
    child = node.firstChild;
    while (child) {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;

  case 3: // Text node
    handleText(node);
    break;
  }
}

walk(document.body);