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
    
    this.at = function(index) {
      const found = getNodeAt.call(this, index);
      return (found === undefined) ? undefined : found.data;
    };
    
    this.insertAt = function(index, data) {
      let found = getNodeAt.call(this, index);
      if (found === undefined) {
        return this;
      }
      let newNode = new Node(data, found.prev, found);
      if (found.prev !== null) {
        found.prev.next = newNode;
      }
      ++this.length;
      return this;
    };
    
    this.isEmpty = function() {
      return !this.length;
    };
    
    this.clear = function() {
      const length = this.length
      for (let i = 0; i < length; ++i) {
        this.deleteAt(0);
      }
      this._head = new Node();
      this._tail = this._head;
      return this;
    };
    
    this.deleteAt = function(index) {
     let found = getNodeAt.call(this, index);
      if (found === undefined) {
        return this;
      }
      if (found.prev !== null) {
        // No matter do we have next or not
        // because if not we should set next to undefined
        found.prev.next = found.next;
      }
      if (found.next !== null) {
        found.next.prev = found.prev;
      }
      --this.length;
      return this;
    };
    
    this.reverse = function() {
      
    };
    
    this.indexOf = function(data) {
      let nextNode = this._head;
      for (let i = 0; i < this.length; ++i) {
        if (nextNode.data === data) {
          return i;
        }
        nextNode = nextNode.next;
      }
      return -1;
    };
    
    function getNodeAt(index) {
      let nextNode = this._head;
      for (let i = 0; i < this.length; ++i) {
        if (i === index) {
          return nextNode;
        }
        nextNode = nextNode.next;
      }
      return undefined;
    }
  }
}

module.exports = LinkedList;
