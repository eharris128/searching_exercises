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

// exercise 3: Dewey ==========================================================================

const library = [
  {
    author: 'Cowlishaw, Mike',
    dewey: '005.133',
    title: 'The REXX Language'
  },
  {
    author: 'Sams',
    dewey: '005.133',
    title: 'Teach Yourself C++ In 21 Days'
  },
  {
    author: 'Stroustrup., Bjarne',
    dewey: '005.133',
    title: 'The C++ Programming Language'
  },
  {
    author: 'Crockford, Douglas',
    dewey: '005.2762',
    title: 'JavaScript: The Good Parts'
  },
  {
    author: 'Flanagan, David',
    dewey: '005.2762',
    title: 'JavaScript: The Definitive Guide'
  },
  {
    author: 'Schmidt, Meinhard',
    dewey: '005.44684',
    title: 'Windows Vista for Dummies'
  },
  {
    author: 'Zondervan',
    dewey: '220.52081',
    title: 'NIV Study Bible'
  },
  {
    author:'Humphries, Russell, Dr.',
    dewey: '231.7652',
    title: 'Starlight and Time'
  },
  {
    author: 'Jane, Frederick Thomas',
    dewey: '623.82509051',
    title: 'Jane\'s Fighting Ships'
  },
  {
    author: 'Norris, Chuck',
    dewey: '796.8092',
    title: 'The Official Chuck Norris Fact Book'
  }
];

const findBook = (bookDewey, library, title) => {
// do a binary search for the matching dewey in the library
// do a binary search for the title?
  const binarySearchValue = (bookDewey, library, start=0, end= library.length) => {
    if  (start > end) return -1;

    let index = Math.floor((start + end)/2);
    let middleElement = library[index];

    if (bookDewey === middleElement['dewey']) {
      console.log('We found your dewey at: ', index);
      // go east with a for loop to match title as long as dewey matches
      if (library[index-1]['dewey'] === bookDewey) {
        for (let i=index; i >= start; i--) {
          console.log('did I run in the for loop');
          if (title === library[i]['title']) {
            console.log('found the title at ', i);
          }
        }
      }
      // go west with a for loop as longas dewey matches to find title
      if (library[index+1]['dewey'] === bookDewey) {
        for (let i=1; i <= end; i++) {
          if (title === library[i]['title']) {
            console.log('found the title at ', i);
          }
        }
      }
      return index;
    }
    
    if (bookDewey < middleElement.dewey) {
      binarySearchValue(bookDewey, library, start, index-1);
    }
    if (bookDewey > middleElement.dewey) {
      binarySearchValue(bookDewey, library, index+1, end);
    }
  };
  binarySearchValue(bookDewey, library);
};

const bookDewey = '005.133';
findBook( bookDewey, library,'The REXX Language');

// Exercise 4 ==================================================

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

// Exercise 5 =======================================================

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