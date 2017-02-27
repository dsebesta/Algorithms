
// [ ] Implement DoublyLinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
//    [ ] .insertAfter() function to insert data after the node passed in
//    [ ] .insertBefore() function to insert data before the node passed in
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return the number of occurrences of a value in the list.  0 for none.
//
// [ ] Write a function using a doubly linked list to return the index of the nth odd number from the
//      tail of the list.
//
// Extra Credit (for the brave and true)
//
//   [ ] Implement a new Vector class using a Doubly LinkedList as a backing store
//

var DoublyLinkedListNode = function(data, next, previous) {
  this.data = data;
  this.next = next;
  this.previous = previous;
};

var DoublyLinkedList = function() {
  this.head = new DoublyLinkedListNode('3 - original head', null, null);
  this.tail = this.head;
};



DoublyLinkedList.prototype.insert = function(index, value) {
  var targetNode,
      newNode;
  if (this.head === this.tail) {
    index = 0;
  }
  if (index === null) {
    targetNode = this.tail;
    newNode = new DoublyLinkedListNode(value, targetNode, targetNode.previous);
      if (targetNode.previous.next) {
          targetNode.previous.next = newNode;
      }
    targetNode.previous = newNode;
  }
  else if (index === 0) {
    targetNode = this.head;
    newNode = new DoublyLinkedListNode(value, targetNode, targetNode.previous);
    targetNode.previous = newNode;
    this.head = newNode;
  }
  else {
    targetNode = this.findByIndex(index);
    newNode = new DoublyLinkedListNode(value, targetNode, targetNode.previous);
    targetNode.previous.next = newNode;
    targetNode.previous = newNode;
  }
};

DoublyLinkedList.prototype.findByIndex = function(index) {
    var currentIndex = 0;
    var currentNode = this.head;
    var prevNode= null;
    while (currentIndex !== index && currentNode !== null) { // looking for either index or end of list where node equals null
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
    }
    if (currentIndex !== index) {
        return this.tail
    } else {
        return currentNode
    }
};


DoublyLinkedList.prototype.insertAfter = function(node, value) {
  var targetNode = this.find(node);
  var newNode = new DoublyLinkedListNode(value, targetNode.next, targetNode);
  targetNode.next.previous = newNode;
  targetNode.next = newNode;

};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
    var targetNode = this.find(node);
    var newNode = new DoublyLinkedListNode(value, targetNode, targetNode.previous);
    targetNode.previous.next = newNode;
    targetNode.previous = newNode;
};

DoublyLinkedList.prototype.remove = function(index) {
  // ...
};

DoublyLinkedList.prototype.get = function (index) {
  // ...
};

DoublyLinkedList.prototype.set = function(index, value) {
  // ...
};

DoublyLinkedList.prototype.find = function(node) {
  var currentNode = this.head;
  while (currentNode !== node && currentNode.next !== null) {
    currentNode = currentNode.next
  }
  if (currentNode.next === null) {
    return this.tail
  }
  else {
    return currentNode
  }
};

DoublyLinkedList.prototype.contains = function(value) {
  // ...
};

var dll = new DoublyLinkedList();
dll.insert(null, '1 - first insert');
dll.insert(null, '2 - second insert');
dll.insert(0, '0 - inserted to head');
dll.insert(1, '0.5 - inserted after head');
dll.insertAfter(dll.head.next.next.next, '2.5 - inserted after 2');
dll.insertBefore(dll.head.next, '0.25 - inserted before 0.5');
console.log(dll);