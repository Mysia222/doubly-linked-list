const Node = require('./node');

class LinkedList {
    constructor() {
    this.length = 0;  
    this._head = new Node();
    this._tail = this._head;
    this.append = function(data) {
      const newTail = new Node(data, this._tail, null);
      this._tail.next = newTail;
      this._tail = newTail;
      if (!this.length) {
        this._head = newTail;
      }
      ++this.length;
      return this;
    }
    
    this.head = function() {
      return this._head.data;
    };
    
    this.tail = function() {
      return this._tail.data;
    };

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
