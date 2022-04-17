export const questionsArrayForCode = [
  {
    question: "Which of the following is true?",
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
    question: "What is the equivalent while loop for the inner j loop of insertion sort",
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

export const questionsArrayForGeneral = [
  {
    question: "Which of the following is NOT true",
    type: 0,
    options: [
      { answer: "Insertion sort has a best case of n", correct: false },
      { answer: "Insertion sort is stable and in-place", correct: false },
      { answer: "Insertion sort has a best case of n\u00B2", correct: true },
      { answer: "Insertion sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of insertion sort if we sorted the tuples by their letter. " +
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
    question: "Insertion Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to insertion sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];
