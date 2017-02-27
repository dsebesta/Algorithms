
// [X] Implement LinkedList class
// [X] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [X] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [X] .get() function to return data at position indicated
// [X] .set() function to change existing data at position indicated
// [X] .find() function to return first node containing the value indicated
// [X] .contains() function to return true/false whether the value exists
//
// [X] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
    this.data = data;
    this.next = next;
};

var LinkedList = function() {
    this.head = new LinkedListNode('1 - original head', null);
    this.tail = this.head;
};


LinkedList.prototype.find = function(index) {
    var currentIndex = 0;
    var currentNode = this.head;
    var prevNode= null;
    while (currentIndex !== index && currentNode !== null) { // looking for either index or end of list where node equals null
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
        return { // return this when index was reached
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
  if (index === undefined) { // removing the tail node
    var currentNode = this.head;
    if (this.head === null || currentNode.next === null) {
      this.head = null;
      this.tail = null;
      return null;
    }
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  else {
    var targetNode = this.find(index);
    if (index === 0) { // removing the head node
      if (this.head === null) {
        console.log('already empty')
      }
      else if (this.head.next === null) {
        this.head = null;
      }
      else {
        this.head = this.head.next;
        if (this.head.next === null) {
          this.tail = this.head
        }
      }
    }
    else {
        targetNode.prevNode.next = targetNode.currentNode.next;
    }
  }
};

LinkedList.prototype.get = function (index) {
    var targetNode = this.find(index);
    return targetNode.currentNode.data;
};

LinkedList.prototype.set = function(index, value) {
    var targetNode = this.find(index);
    var newNode = new LinkedListNode(value, targetNode.currentNode.next);
    targetNode.prevNode.next = newNode;
};

LinkedList.prototype.contains = function(value) {
    var currentNode = this.head;
    while(currentNode.data !== value && currentNode !== this.tail) {
      currentNode = currentNode.next;
    }
    if (currentNode === this.tail) {
      return false
    }
    else {
      return true
    }
};

LinkedList.prototype.average = function() {
    var total = 0,
        counter = 0;
    var currentNode = this.head;
    while (currentNode.next !== null) {
      if (!isNaN(currentNode.data)) {
        total += currentNode.data;
        counter++
      }
      currentNode = currentNode.next
    }
    if (counter === 0) {
      return 'list doesnt contain integers'
    }
    else {
      return total / counter;
    }
};

var ll = new LinkedList();
ll.insert(1, '3 - inserted into first index');
ll.insert(2, '4 - inserted into second index');
ll.insert(1, '2 - inserted into first index again');
ll.insert(7, '5 - inserted into 7th index');
ll.insert(0, '0 - inserted into head');
ll.remove(0);
ll.remove();
console.log('should get node with data 3 - inserted into first index: ' + ll.get(2));
ll.remove(2);  // should remove number 3
ll.set(1, '1.5 - should between 1 and 4');
console.log('should be true: ' + ll.contains('1.5 - should between 1 and 4'));
console.log('should be false: ' + ll.contains('this doesnt exist'));
// ll.remove();
// ll.remove();
// ll.remove();
// ll.remove();
// ll.remove();
console.log('should not contain integers: ' + ll.average());
ll.insert(2, 3);
ll.insert(2, 5);
ll.insert(2, 7);
ll.insert(2, 8);
console.log('answer should be 5.75: ' + ll.average());

console.log(ll);
