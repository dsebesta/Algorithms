
// [X] Implement DoublyLinkedList class
// [X] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
//    [X] .insertAfter() function to insert data after the node passed in
//    [X] .insertBefore() function to insert data before the node passed in
// [X] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [X] .get() function to return data at position indicated
// [X] .set() function to change existing data at position indicated
// [X] .find() function to return first node containing the value indicated
// [X] .contains() function to return the number of occurrences of a value in the list.  0 for none.
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
  if (targetNode === this.tail) {
      this.tail = newNode;
  }
  else {
      targetNode.next.previous = newNode;
  }
  targetNode.next = newNode;

};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
    var targetNode = this.find(node);
    var newNode = new DoublyLinkedListNode(value, targetNode, targetNode.previous);

    if (targetNode === this.head) {
        this.head = newNode;
    }
    else {
        targetNode.previous.next = newNode;
    }
    targetNode.previous = newNode;
};

DoublyLinkedList.prototype.remove = function(index) {
  var targetNode;
  if (this.head === this.tail) {
      index = 0;
  }
  if (index === undefined) {
      targetNode = this.tail;
      targetNode.previous.next = null;
      this.tail = targetNode.previous;
  }
  else if (index === 0) {
      targetNode = this.head;
      targetNode.next.previous = null;
      this.head = targetNode.next;
  }
  else {
      targetNode = this.findByIndex(index);
      targetNode.previous.next = targetNode.next;
      targetNode.next.previous = targetNode.previous;
  }
};

DoublyLinkedList.prototype.get = function (index) {
  return this.findByIndex(index);
};

DoublyLinkedList.prototype.set = function(index, value) {
  var targetNode = this.findByIndex(index);
  targetNode.data = value;
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
  var counter = 0;
  var currentNode = this.head;
  var keepGoing = true;
  while (keepGoing) {
      if (currentNode.data === value) {
          counter++;
      }
      if (currentNode === this.tail) {
          keepGoing = false;
      }
      currentNode = currentNode.next;
  }
  return counter;

};

var dll = new DoublyLinkedList();
dll.insert(null, '1 - first insert');
dll.insert(null, '2 - second insert');
dll.insert(0, '0 - inserted to head');
dll.insert(1, '0.5 - inserted after head');
dll.insertAfter(dll.head.next.next.next, '2.5 - inserted after 2');
dll.insertBefore(dll.head.next, '0.25 - inserted before 0.5');
dll.remove(); // should remove 3 - original head
dll.remove(0); // should remove 0 - inserted to head
dll.remove(2); // should remove 1 - first insert
console.log(dll.get(1)); // should return .5 - inserted after head
dll.set(0, 'new head');
dll.insert(null, 'containCheck');
console.log('should be 1: ' + dll.contains('containCheck'));
dll.insert(null, 'containCheck');
console.log('should be 2: ' + dll.contains('containCheck'));
dll.insertAfter(this.tail, 'containCheck');
console.log('should be 3: ' + dll.contains('containCheck'));
console.log(dll);