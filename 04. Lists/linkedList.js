
// [ ] Implement LinkedList class
// [X] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [X] .find() function to return first node containing the value indicated
// [ ] .contains() function to return true/false whether the value exists
//
// [ ] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
  this.data = data;
  this.next = next;
};

var LinkedList = function() {
  this.head = new LinkedListNode('original head', null);
  this.tail = null;
};


LinkedList.prototype.find = function(index) {
  var currentIndex = 0;
  var currentNode = this.head;
  var prevNode= null;
  while (currentIndex !== index && currentNode !== null) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    currentIndex++;
  }
  if (currentIndex !== index) {
    return { // return this when last node is null, didnt reach index
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

LinkedList.prototype.insert = function(index, value) {
  var targetNode = this.find(index);
  if (targetNode.currentNode === null) {
    var newNode = new LinkedListNode(value, null);
    targetNode.prevNode.next = newNode;
    this.tail = newNode;
  } else if (targetNode.currentNode === this.head) {
    var newNode = new LinkedListNode(value, targetNode.currentNode);
    this.head = newNode

  } else {
    var newNode = new LinkedListNode(value, targetNode.currentNode);
    targetNode.prevNode.next = newNode;

  }


};

LinkedList.prototype.remove = function(index) {
  // ...
};

LinkedList.prototype.get = function (index) {
  // ...
};

LinkedList.prototype.set = function(index, value) {
  // ...
};

LinkedList.prototype.contains = function(value) {
  // ...
};

var ll = new LinkedList();
ll.insert(1, 'inserted into first index');
ll.insert(2, 'inserted into second index');
ll.insert(1, 'inserted into first index again');
ll.insert(7, 'inserted into 7th index');
ll.insert(0, 'inserted into head');

console.log(ll);
