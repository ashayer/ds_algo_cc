export const queueGeneralQuiz = [
  {
    question: "Which of the following is NOT true about Queues?",
    type: 0,
    options: [
      { answer: "All methods have a constant run time", correct: true },
      { answer: "The only two pointers are to the front and end of the queue", correct: false },
      { answer: "You can only add elements to end of the queue", correct: false },
      { answer: "You can only remove elements to the front of the queue", correct: false },
    ],
  },
  {
    question: "Why is a queue data structure abstract?",
    type: 0,
    options: [
      { answer: "It only a reference to the behavior of a queue model", correct: true },
      { answer: "An array can only be accessed from two indexes", correct: false },
      { answer: "All data structures are abstract", correct: false },
      { answer: "Its just an idea", correct: false },
    ],
  },
  {
    question: "The most recent element to be inserted will be the last element to be removed.",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Check all that apply to Queues",
    type: 1,
    options: [
      { answer: "Follow a LIFO order", correct: false },
      { answer: "Adding/Deleting an element takes constant time", correct: true },
      { answer: "Any index can be accessed using the queue methods", correct: false },
      { answer: "You can add an element to the middle in-place", correct: false },
    ],
  },
];

export const queueCodeQuiz = [
  {
    question: "What are the values of the front and tail index in an empty queue?",
    type: 0,
    options: [
      { answer: "Front = 0 Tail = 0", correct: false },
      { answer: "Front = -1 Tail = -1", correct: true },
      { answer: "Front = null Tail = null", correct: false },
      { answer: "Front = 0 Tail = -1", correct: false },
    ],
  },
  {
    question:
      "What would the peak method return after the following operations and initial Queue? [7,3,1,8,4] Dequeue() Enqueue(9) Dequeue() Enqueue(3)",
    type: 0,
    options: [
      { answer: "1", correct: true },
      { answer: "3", correct: false },
      { answer: "8", correct: false },
      { answer: "9", correct: false },
    ],
  },
  {
    question: "In a queue of size 8, the front index is at 1 and the rear index is at 8",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "What conditions imply the queue is empty?",
    type: 1,
    options: [
      { answer: "Front index = rear index", correct: false },
      { answer: "Front index < 0", correct: true },
      { answer: "Front index = 0", correct: false },
      { answer: "Rear index = 0", correct: false },
    ],
  },
];

export const stackGeneralQuiz = [
  {
    question: "Which of the following is NOT true about selection sort",
    type: 0,
    options: [
      { answer: "Selection sort has a best case of n", correct: false },
      { answer: "Selection sort is stable and in-place", correct: false },
      { answer: "Selection sort has a best case of n\u00B2", correct: true },
      { answer: "Selection sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of Selection sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Selection Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to Selection sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const stackCodeQuiz = [
  {
    question: "Which of the following is true about selection sort?",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop with the J iterator",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or greater than the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent while loop for the inner j loop of Selection sort",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The jth and jth-1 values are swapped in the algorithm",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
];

export const linkedListGeneralQuiz = [
  {
    question: "MERGEMRMGERMGEMERMGE",
    type: 0,
    options: [
      { answer: "Merge sort has a best case of n", correct: false },
      { answer: "Merge sort is stable and in-place", correct: false },
      { answer: "Merge sort has a best case of n\u00B2", correct: true },
      { answer: "Merge sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of Merge sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Merge Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to Merge sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const linkedListCodeQuiz = [
  {
    question: "MERGEMRMGERMGEMERMGE",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop with the J iterator",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or greater than the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent while loop for the inner j loop of Merge sort",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The jth and jth-1 values are swapped in the algorithm",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
];

export const binaryTreeGeneralQuiz = [
  {
    question: "QUIQUICCUQICUQICUQIQC",
    type: 0,
    options: [
      { answer: "Quick sort has a best case of n", correct: false },
      { answer: "Quick sort is stable and in-place", correct: false },
      { answer: "Quick sort has a best case of n\u00B2", correct: true },
      { answer: "Quick sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of Quick sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Quick Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to Quick sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const binaryTreeCodeQuiz = [
  {
    question: "QUIQUICCUQICUQICUQIQC",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop with the J iterator",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or greater than the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent while loop for the inner j loop of Quick sort",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The jth and jth-1 values are swapped in the algorithm",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
];
