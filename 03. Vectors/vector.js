
// A Vector is a dynamic array that expands in size when it fills up and needs more space, and
//  reduces size when elements are removed and a certain amount of space is wasted.
//
// NOTE: In all cases, if the index is out of bounds, throw an error.
// NOTE: Must implement from scratch, cannot create a direct wrapper around built-in functionality
//
// [ ] implement a Vector class with the following functions
// [ ] .insert() function that takes an index and value to insert
// [ ] .add() function to append a value to the end of the array
// [ ] .remove() function to remove whatever value at index
// [ ] .get() function to return value at index
// [ ] .set() function to set value at index
//
// [ ] .contains() function to return true/false whether a given value exists in the Vector
//
var Vector = function(initialCapacity, maxCapacity) {
    this.storage = [];
    this.capacity = initialCapacity || 16;  // Default to array size 16
    this.max = maxCapacity || 1 << 24;      // Default to max Vector size 16,777,216
    this.length = 0;
};


Vector.prototype.insert = function(index, value) {
    for (var i = this.length; i > index; i--) {
        this.set(i, this.storage[i-1])
    }
    this.set(index, value);
    this.length++

};

Vector.prototype.add = function(value) {
    this.set(this.length, value);
    this.length++
};

Vector.prototype.remove = function(index) {
    for (var i = index; i < this.length - 1; i ++) {
        this.set(i, this.storage[i+1])
    }
    this.set(this.length - 1, null);
    this.length--
};

Vector.prototype.get = function(index) {
    return this.storage[index];
};

Vector.prototype.set = function(index, value) {
    this.storage[index] = value;
};

Vector.prototype.contains = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (value === this.get(i)) {
            return true
        }
    }
    return false
};



var v = new Vector();
v.add(1);
v.add(2);
v.add(3);
console.log("v.length: " + (v.length === 3));
v.add(4);
v.add(5);
v.insert(2, 10);
console.log("v.length: " + (v.length === 6));
console.log("v.get(2): " + (v.get(2) === 10));
v.set(2, 15);
console.log("v.set(2, 15): " + (v.get(2) === 15));
v.remove(2);
console.log("v.remove(2): " + (v.length === 5));
console.log("contains(3): " + (v.contains(3)));


