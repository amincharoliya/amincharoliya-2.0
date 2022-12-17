---
title: Linear and Binary algorithms in JavaScript
description: Linear and binary algorithms are two of the most commonly used algorithms in computer programming. They are used to solve a variety of problems
date: Dec 17, 2022
author: 'Amin Charoliya'
authorImage: 'amin-thumb.jpg'
category: 'javascript'
bannerImage: 'js-algorithm.png'
tags:
    - javascript
    - algorithm
---

Linear and binary algorithms are two of the most commonly used algorithms in computer programming. They are used to solve a variety of problems, from sorting data to searching for a specific item in a list. In this article, we will discuss the differences between linear and binary algorithms and provide a code example of each in JavaScript.

Linear algorithms are the simplest type of algorithm. They work by sequentially going through a list of items and performing an action on each item. For example, a linear search algorithm would go through a list of numbers and check if a given number is present in the list. If it is, the algorithm will return the index of the number in the list.

Binary algorithms are more complex than linear algorithms. They work by dividing a list of items into two halves and then searching for a specific item in one of the halves. This process is repeated until the item is found or the list is empty. For example, a binary search algorithm would go through a list of numbers and check if a given number is present in the list. If it is, the algorithm will return the index of the number in the list.

Now let’s look at a code example of each algorithm in JavaScript.

## Linear algorithm

In JavaScript, linear algorithms can be implemented using a variety of techniques. The most common approach is to use a loop, such as a for loop or a while loop. These loops allow us to iterate over each item in the data set and process it one at a time.

For example, let’s say we have an array of numbers and we want to sort them in ascending order. We can use a for loop to iterate over each item in the array and compare it to the next item. If the current item is larger than the next item, we can swap them. This process is repeated until the array is sorted.

Here is an example of a linear sorting algorithm written in JavaScript:

```javascript[class="line-numbers"]
function sort(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

    }

  }

return arr;

}
```

This code example uses a nested for loop to iterate over each item in the array and compare it to the next item. If the current item is larger than the next item, they are swapped. This process is repeated until the array is sorted.

Linear algorithms are an important concept in computer science and are used to solve a wide variety of problems. In JavaScript, they can be implemented using a variety of techniques, such as loops. We have provided a code example of a linear sorting algorithm written in JavaScript to help illustrate how linear algorithms can be used.

## Binary algorithm

Binary algorithms are a type of algorithm that uses a binary search to find a specific item in a data set. Binary algorithms are commonly used in computer science and programming, and are especially useful for sorting and searching large data sets. Let's discuss binary algorithms in JavaScript with a code example.

Binary algorithms are based on the binary search, which is a type of search algorithm that works by dividing a data set into two halves and then searching for the desired item in one of the halves. If the item is not found in the first half, the algorithm will then search the second half. This process is repeated until the desired item is found.

Binary algorithms are often used in sorting algorithms, such as quicksort and mergesort. They are also used in searching algorithms, such as binary search trees and hash tables. In JavaScript, binary algorithms can be used to quickly search through large data sets.

To illustrate how binary algorithms work in JavaScript, let’s look at a code example. In this example, we will use a binary search to find a specific item in an array.

```javascript[class="line-numbers"]
// Create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define the item we are searching for
let item = 7;

// Define the start and end indices
let start = 0;
let end = numbers.length - 1;

// Define a function to perform the binary search
function binarySearch(arr, item, start, end) {
  // If the start index is greater than the end index, the item is not in the array
  if (start > end) {
    return -1;
  }

  // Calculate the middle index
  let mid = Math.floor((start + end) / 2);

  // If the item is found at the middle index, return the index
  if (arr[mid] === item) {
    return mid;
  }

  // If the item is less than the value at the middle index, search the left half of the array
  if (item < arr[mid]) {
    return binarySearch(arr, item, start, mid - 1);
  }

  // If the item is greater than the value at the middle index, search the right half of the array
  if (item > arr[mid]) {
    return binarySearch(arr, item, mid + 1, end);
  }

}

// Call the binary search function
let result = binarySearch(numbers, item, start, end);

// Print the result
console.log(result); // Output: 6
```

In this example, we used a binary search to find the index of the item 7 in the array. The binary search function recursively divided the array into halves until the item was found.

Binary algorithms are an important part of computer science and programming. They are used in sorting and searching algorithms to quickly find items in large data sets. In JavaScript, binary algorithms can be used to quickly search through large data sets.

In this article, we discussed the differences between linear and binary algorithms and provided code examples in JavaScript to help illustrate how they can be used. Overall, both linear and binary algorithms are important concepts in computer science and are used in a variety of applications.
