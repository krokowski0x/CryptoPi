class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.up = null;
    this.down = null;
  }

  addChild(node) {
    this.down = node;
    node.up = this;
    return this;
  }
}

class LinkedListOnSteroids {
  constructor(entries, viewFunction) {
    this.head = null;
    this.length = 0;

    for (let entry of entries)
      this.add(entry);

    this.get(entries.length - 1).next = this.head;
  }

  add(data) {
    const node = new Node(data);
    let nodeToCheck = this.head;

    if (!nodeToCheck) {
      this.head = node;
      this.length++;
      return this;
    }

    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    nodeToCheck.next = node;
    this.length++;
    return node;
  }

  get(num) {
    let nodeToCheck = this.head;
    let count = 0;

    if (num > this.length)
      throw new Error('The list is shorter than you\'ve thought!');

    while (count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    return nodeToCheck;
  }
};

module.exports = { LinkedListOnSteroids, Node };
