'use strict';

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