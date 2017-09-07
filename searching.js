'use strict';
// See for solutions: https://gist.github.com/Rosuav/9d83218d47f95777ada9dcee3262952c

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5, 76, 62];

const searchValue = (number, arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    console.log('We have iterated ', i, ' times so far.');
    if (currentNum === number) {
      console.log('We found your number at: ', i);
      return i;
    }
  }
};

// searchValue(7, data);

const sortedData = data.sort(function(a,b) {
  return a - b;
});

// searchValue(8, sortedData);

const binarySearchValue = (number, arr, start=0, end=arr.length) => {
  if  (start > end) return -1;

  let index = Math.floor((start + end)/2);
  let middleElement = arr[index];

  if (number === middleElement) {
    console.log('We found your number at: ', index);
    return index;
  }
  // Is our number bigger or smaller than the middle element?
  if (number < middleElement) {
    binarySearchValue(number, arr, start, index-1);
  }
  // if num > middle
  if (number > middleElement) {
    binarySearchValue(number, arr, index+1, end);
  }
};

// binarySearchValue(8, sortedData);

// exercise 3: Dewey ==================

// Go through and find the Hundreds number that matches
// Go through and find the 10s number that matches
// Go through and find the ones etc..... 
// until we find our number. 

const library = [
  {dewey:'005.133',title:'Mike Cowlishaw: The REXX Language'},
  '005.133 Mike Cowlishaw: The REXX Language',
  '005.133 Sams: Teach Yourself C++ In 21 Days',
  '005.133 Bjarne Stroustrup: The C++ Programming Language',
  '005.2762 Douglas Crockford: JavaScript: The Good Parts',
  '005.2762 David Flanagan: JavaScript: The Definitive Guide',
  '005.44684 Meinhard Schmidt: Windows Vista for Dummies', //It certainly is...
  '220.52081 Zondervan: NIV Study Bible',
  '231.7652 Dr Russell Humphries: Starlight and Time',
  '623.82509051 Frederick Thomas Jane: Jane\'s Fighting Ships', //So far, the ships are winning.
  '796.8092 Chuck Norris: The Official Chuck Norris Fact Book',
];
const dewey = '005.133';
// const justDewey = library.map(item => item.match(/[0-9]\d*(\.\d+)?/g) );

// console.log(justDewey);
const findBook = (dewey, library, title) => {
  // extract the numbers from the library
  // identify number from array in library
  // add number to array 
  // do this multiple times
  
  // do a binary sarch on the dewey numbers
  binarySearchValue(dewey, library, start=0, end=arr.length);
  // for ( let i= 0; i<deweyNumber.length; i++) {
  // };
};

// Exercise 4 ===========================

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this); 
      } else {
        this.left.insert(key, value);
      }
    } else { // right-side insertion if the incoming key > current node's key
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this); // if the right-side child doesn't exist, create new node
      } else {
        this.right.insert(key, value); // if right-side child does exist, traverse to that child and do insert again
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(24);
bst.insert(35);
bst.insert(70);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(31);
bst.insert(44);
bst.insert(66);
bst.insert(90);
bst.insert(22);
// display pre order: root, recursively left, recursively  right
const displayPreOrder = (tree) => {
  console.log(tree.key);
  if (tree.left) {
    displayPreOrder(tree.left);
  }
  if(tree.right) {
    displayPreOrder(tree.right);
  }
};
// displayPreOrder(bst);
// display post order: recursively left, recursively right, root
const displayPostOrder = (tree) => {
  if (tree.left) {
    displayPostOrder(tree.left);
  }
  if(tree.right) {
    displayPostOrder(tree.right);
  }
  console.log(tree.key);
};
// displayPostOrder(bst);

// display in order: recursively left, node, recursively right
const displayInOrder = (tree) => {
  if (tree.left) {
    displayInOrder(tree.left);
  }
  console.log(tree.key);
  if(tree.right) {
    displayInOrder(tree.right);
  }
};
// displayInOrder(bst);

// Exercise 5 ===========================

const stockPrices = [128, 97, 121, 123, 98, 97, 105];

const sellingStocks = (arr) => {
  let min = arr[0];
  let maxProfit = 0;
  for (let i = 0; i<arr.length; i++ ) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
  }
  return maxProfit;
};

sellingStocks(stockPrices);