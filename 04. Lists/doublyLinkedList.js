
// [ ] Implement DoublyLinkedList class
// [X] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
//    [ ] .insertAfter() function to insert data after the node passed in
//    [ ] .insertBefore() function to insert data before the node passed in
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return the number of occurrences of a value in the list.  0 for none.
// [X] .findIndex() function used to for regular insert using index
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
  this.head = new DoublyLinkedListNode('original head', null, null);
  this.tail = null;
};

DoublyLinkedList.prototype.findIndex = function(index) {
    var currentIndex = 0;
    var currentNode = this.head;
    var prevNode = null;
    while (currentIndex !== index && currentNode !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
    }
    if (currentIndex !== index) {
        return {
            prevNode: prevNode,
            currentNode: null,
            currentIndex: currentIndex
        }
    } else {
        return { // return this when index was reached, and ready to insert into the middle
            prevNode: prevNode,
            currentNode: currentNode,
            currentIndex: currentIndex
        }
    }
};

DoublyLinkedList.prototype.insert = function(index, value) {
  var targetNode = this.findIndex(index);
  if (targetNode.currentNode === null) { //inserted to end
      var newNode = new DoublyLinkedListNode(value, null, targetNode.prevNode);
      newNode.previous.next = newNode;
      this.tail = newNode;
  } else if (targetNode.currentNode === this.head) { //inserted to head
      var newNode = new DoublyLinkedListNode(value, this.head, null);
      this.head.previous = newNode;
      this.head = newNode;
  } else { //somewhere in the middle
      var newNode = new DoublyLinkedListNode(value, targetNode.currentNode, targetNode.prevNode);
      targetNode.currentNode.previous.next = newNode;
      targetNode.currentNode.previous = newNode;

  }
};

DoublyLinkedList.prototype.insertAfter = function(node, value) {
  // ...
};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
  // ...
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


DoublyLinkedList.prototype.contains = function(value) {
  // ...
};

var dll = new DoublyLinkedList();
dll.insert(1, 'inserted into first index');
dll.insert(2, 'inserted into second index');
dll.insert(1, 'inserted into first index again');
dll.insert(7, 'inserted into 7th index');
dll.insert(0, 'inserted into head');

console.log(dll);